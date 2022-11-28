import {
  Button,
  FileInput,
  Label,
  Select,
  Spinner,
  TextInput,
} from "flowbite-react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const AddProduct = () => {
  const imghostkey = process.env.REACT_APP_imgbb;
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    setIsLoading(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imghostkey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          console.log(imageData.data.url);
          const product = {
            name: data.name,
            model_year: data.model_year,
            reg_year: data.reg_year,
            buy_price: data.buy_price,
            sell_price: data.sell_price,
            seller: user.displayName,
            seller_email: user.email,
            seller_image: user.photoURL,
            category: data.category,
            published_time: new Date(),
          };
          console.log(product);
          fetch("http://localhost:5000/add-product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("Added");
              reset();
              setIsLoading(false);
            });
        } else {
          toast.error("Provide a Valid image file");
          setIsLoading(false);
        }
      });
  };

  return (
    <div className="w-96 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value="Product Name" />
          </div>
          <TextInput
            required={true}
            id="small"
            type="text"
            sizing="md"
            {...register("name")}
          />
        </div>
        <div id="fileUpload">
          <div className="mb-2 block">
            <Label htmlFor="file" value="Add Product Image" />
          </div>
          <FileInput id="file" {...register("image")} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value="Model Year" />
          </div>
          <TextInput
            required={true}
            id="small"
            type="number"
            sizing="md"
            {...register("model_year")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value="Registration Year" />
          </div>
          <TextInput
            required={true}
            id="small"
            type="number"
            sizing="md"
            {...register("reg_year")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value="Buying Price ($)" />
          </div>
          <TextInput
            required={true}
            id="small"
            type="number"
            sizing="md"
            {...register("buy_price")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value="Selling Price ($)" />
          </div>
          <TextInput
            required={true}
            id="small"
            type="number"
            sizing="md"
            {...register("sell_price")}
          />
        </div>

        <div id="select">
          <div className="mb-2 block">
            <Label htmlFor="countries" value="Select your brand" />
          </div>
          <Select id="countries" required={true} {...register("category")}>
            <option value={1} defaultChecked>
              Toyota
            </option>
            <option value={2}>Honda</option>
            <option value={3}>Hyundai</option>
            <option value={4}>Nissan</option>
          </Select>
        </div>
        {isLoading && (
          <Spinner
            aria-label="Center-aligned spinner example"
            className="my-4"
          />
        )}
        <Button className="my-4" type="submit">
          Add
        </Button>
      </form>
      <Toaster />
    </div>
  );
};

export default AddProduct;
