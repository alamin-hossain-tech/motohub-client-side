import {
  Avatar,
  Badge,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import {} from "@mui/material/Icon";
import { Button, Label, Spinner, TextInput } from "flowbite-react";

import React, { useContext, useEffect, useState } from "react";
import { AiOutlineCar } from "react-icons/ai";
import { GrStatusGood } from "react-icons/gr";
import { BsHeart, BsHeartFill, BsPerson } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { IoLocationSharp, IoPricetagsOutline } from "react-icons/io5";
import { SlSpeedometer } from "react-icons/sl";
import { GiGasPump, GiGearStickPattern } from "react-icons/gi";
import { TbLicense } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useVerify from "../../../Hooks/useVerify";

import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { getTime } from "../../../Utility/getTime";
import { FaHeart, FaPhone } from "react-icons/fa";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

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
  const [isVerify, isVerifyLoading] = useVerify(seller_email);
  const { user, role, roleLoading } = useContext(AuthContext);
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
      customer_name: user?.displayName,
      customer_phone: data.customer_phone,
      customer_email: user?.email,
      meeting_location: data.meeting_location,
      product_name: name,
      product_image: product_image,
      product_id: _id,
      product_price: sell_price,
      order_date: new Date(),
    };
    fetch("https://motohub-gules.vercel.app/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("moto_token")}`,
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
  const { data: wishlistData = [], refetch } = useQuery({
    queryKey: ["users?role=buyer"],
    queryFn: () =>
      fetch(
        `https://motohub-alamin-merndev.vercel.app/wishlist?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("moto_token")}`,
          },
        }
      ).then((res) => res.json()),
  });
  const wishlist = wishlistData?.find((w) => w.product_id === _id);

  const handleWishList = (id) => {
    const wishlist = {
      customer_email: user?.email,
      product_id: id,
      product_name: name,
      product_price: sell_price,
      product_image: product_image,
    };
    fetch("https://motohub-alamin-merndev.vercel.app/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("moto_token")}`,
      },
      body: JSON.stringify(wishlist),
    })
      .then((res) => res.json())
      .then((result) => {
        refetch();
      });
  };

  const undoWishList = (id) => {
    fetch(`https://motohub-alamin-merndev.vercel.app/wishlist/delete/${id}`, {
      method: "post",
      headers: {
        authorization: `bearer ${localStorage.getItem("moto_token")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        refetch();
      });
  };

  return (
    <>
      <div
        // sx={{ backgroundColor: "bg-neutral-600" }}
        className="bg-neutral-600 rounded-md relative"
      >
        <div>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140px"
            image={product_image}
            className="prdoct_card_img rounded-t-md"
          />
          {
            <div className="absolute top-2 right-2">
              {wishlist?.product_id === _id ? (
                <Tooltip title="Undo Wishlist">
                  <IconButton onClick={() => undoWishList(wishlist?._id)}>
                    <BsHeartFill className="inline text-lg text-red-500"></BsHeartFill>
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Add to Wishlist">
                  <IconButton onClick={() => handleWishList(_id)}>
                    <BsHeart className="inline text-lg text-red-500"></BsHeart>
                  </IconButton>
                </Tooltip>
              )}
            </div>
          }
        </div>
        <div className="px-5 flex justify-between">
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
              alt={seller}
              src={seller_image}
              sx={{ width: 56, height: 56 }}
            />
          </Badge>
        </div>
        <CardContent className=" text-white">
          <Typography gutterBottom variant="h5" component="div"></Typography>
          <h4 className="font-bold text-xl">{name}</h4>
          <div>
            <h4 className="text-lg font-medium">${sell_price}</h4>
          </div>
          <Divider className="py-3" />
          <div className="pt-5 flex justify-between ">
            <div className="flex items-center gap-3">
              <SlSpeedometer
                className="inline text-blue-600"
                size={"25px"}
              ></SlSpeedometer>
              <span>20K</span>
            </div>
            <div className="flex items-center gap-3">
              <GiGearStickPattern
                className="inline text-blue-600"
                size={"25px"}
              ></GiGearStickPattern>
              <span>Auto</span>
            </div>
            <div className="flex items-center gap-3">
              <GiGasPump
                className="inline text-blue-600"
                size={"25px"}
              ></GiGasPump>
              <span>Petrol</span>
            </div>
          </div>
          <Button className="mt-5 w-full" onClick={handleOpen}>
            Book Now
          </Button>
        </CardContent>
        {/* <div className="grid grid-cols-2 text-center  text-gray-600">
          <div className="border-t border-b border-r py-3">
            <p className="font-semibold">
              <AiOutlineCar className="inline text-xl mr-2"></AiOutlineCar>
              Model Year
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
        </div> */}

        {}
      </div>

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
                  defaultValue={user?.displayName}
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
                  defaultValue={user?.email}
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
