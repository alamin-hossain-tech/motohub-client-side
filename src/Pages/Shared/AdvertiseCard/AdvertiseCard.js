import {
  Avatar,
  Badge,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import {} from "@mui/material/Icon";
import { Button, Label, Spinner, TextInput } from "flowbite-react";

import React, { useContext, useState } from "react";
import { AiOutlineCar } from "react-icons/ai";
import { GrStatusGood } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { IoLocationSharp, IoPricetagsOutline } from "react-icons/io5";
import { MdOutlinePriceChange } from "react-icons/md";
import { TbLicense } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useVerify from "../../../Hooks/useVerify";
import useRole from "../../../Hooks/useRole";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { getTime } from "../../../Utility/getTime";

const AdvertiseCard = ({ product }) => {
  const {
    seller_email,
    product_image,
    name,
    buy_price,
    sell_price,
    condition,
    model_year,
    published_time,
    reg_year,
    seller,
    seller_contact,
    seller_image,
    seller_location,
    _id,
  } = product;
  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [isVerify] = useVerify(seller_email);
  const { user } = useContext(AuthContext);
  const [role] = useRole(user.email);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (user?.email) {
      setOpen(true);
    } else {
      navigate("/login");
    }
  };
  const handleClose = () => setOpen(false);

  const onSubmit = (data) => {
    setIsLoading(true);
    const order = {
      customer_name: user.displayName,
      customer_phone: data.customer_phone,
      customer_email: user.email,
      meeting_location: data.meeting_location,
      product_name: name,
      product_image: product_image,
      product_id: _id,
      product_price: sell_price,
      order_date: new Date(),
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          toast.success("Order placed Succesfully ");
          setIsLoading(false);
          reset();
          setTimeout(() => {
            setOpen(false);
          }, 3000);
        }
        if (result.error) {
          toast.error("Already Ordered");
          setIsLoading(false);
        }
      });
  };

  return (
    <>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={product_image}
        />
        <div className="px-5">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            badgeContent={
              isVerify && (
                <Tooltip title="Verified Seller" placement="top">
                  <IconButton>
                    <TiTick className="text-white text-base bg-blue-600 rounded-full inline"></TiTick>
                  </IconButton>
                </Tooltip>
              )
            }
            className="-mt-7"
          >
            <Avatar
              alt="Travis Howard"
              src={seller_image}
              sx={{ width: 56, height: 56 }}
            />
          </Badge>
        </div>
        <CardContent className="text-center">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <div className="text-center text-gray-500">
            <p className="font-semibold">
              <IoLocationSharp className="inline text-xl"></IoLocationSharp>{" "}
              {seller_location}
            </p>
            <p className="">
              <BsPerson className="inline text-xl"></BsPerson>
              {seller}
              {isVerify && (
                <Tooltip title="Verified Seller" placement="top">
                  <IconButton>
                    <TiTick className="text-white text-base bg-blue-600 rounded-full inline"></TiTick>
                  </IconButton>
                </Tooltip>
              )}
            </p>
            <p>{seller_contact}</p>
          </div>
        </CardContent>
        <div className="grid grid-cols-2 text-center  text-gray-600">
          <div className="border-t border-b border-r py-3">
            <p className="font-semibold">
              <AiOutlineCar className="inline text-xl mr-2"></AiOutlineCar>Model
              Year
            </p>
            <p>{model_year}</p>
          </div>
          <div className="border-t border-b py-3">
            <p className="font-semibold">
              <TbLicense className="inline text-xl mr-2"></TbLicense>
              Registration Year
            </p>
            <p>{reg_year}</p>
          </div>
          <div className="border-b border-r py-3">
            <p className="font-semibold">
              <IoPricetagsOutline className="inline text-xl mr-2"></IoPricetagsOutline>
              Buying Price
            </p>
            <p>${buy_price}</p>
          </div>
          <div className="border-b py-3">
            <p className="font-semibold">
              <MdOutlinePriceChange className="inline text-xl mr-2"></MdOutlinePriceChange>
              Resell Price
            </p>
            <p>${sell_price}</p>
          </div>
          <div className="border-b border-r py-3">
            <p className="font-semibold">
              <IoMdTime className="inline text-xl mr-2"></IoMdTime>Post Time
            </p>
            <p>{getTime(published_time)}</p>
          </div>
          <div className="border-b py-3 flex items-center justify-center">
            <p className="font-semibold">
              <GrStatusGood className="inline text-xl mr-2"></GrStatusGood>
              <span
                className={`${condition === "Excellent" && "text-teal-500"} ${
                  condition === "Good" && "text-green-400"
                } ${condition === "Fair" && "text-orange-400"}`}
              >
                {condition}
              </span>
            </p>
          </div>
        </div>

        {isVerify && role.role === "buyer" && (
          <CardActions className="justify-center my-5">
            <Button onClick={handleOpen}>Book Now</Button>
          </CardActions>
        )}
      </Card>

      {/* Buying Modal  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Your Name" />
                </div>
                <TextInput
                  id="name"
                  type="text"
                  placeholder=""
                  defaultValue={user.displayName}
                  disabled={true}
                  {...register("name")}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Your Email" />
                </div>
                <TextInput
                  type="text"
                  placeholder=""
                  defaultValue={user.email}
                  disabled={true}
                  {...register("email")}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Product Name" />
                </div>
                <TextInput
                  type="text"
                  placeholder=""
                  defaultValue={name}
                  disabled={true}
                  {...register("product_name")}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Product Price" />
                </div>
                <TextInput
                  type="text"
                  placeholder=""
                  defaultValue={`$${sell_price}`}
                  disabled={true}
                  {...register("product_price")}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Your Phone Number" />
                </div>
                <TextInput
                  type="number"
                  placeholder="017........"
                  {...register("customer_phone")}
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Meeting Location" />
                </div>
                <TextInput
                  type="text"
                  placeholder="Dhaka"
                  {...register("meeting_location")}
                  required={true}
                />
              </div>
              {isLoading && (
                <Spinner
                  aria-label="Center-aligned spinner example"
                  className="my-4"
                />
              )}
              <div className="flex gap-3 pt-3">
                <Button type="submit">Submit</Button>
                <Button onClick={() => setOpen(false)} color="failure">
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
      <Toaster></Toaster>
    </>
  );
};

export default AdvertiseCard;
