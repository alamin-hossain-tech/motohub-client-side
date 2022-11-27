import {
  Avatar,
  Badge,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";
import { Button } from "flowbite-react";
import React from "react";
import { AiOutlineCar } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { IoLocationSharp, IoPricetagsOutline } from "react-icons/io5";
import { MdOutlinePriceChange } from "react-icons/md";
import { TbLicense } from "react-icons/tb";
import { TiTick } from "react-icons/ti";

const AdvertiseCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://flowbite.com/docs/images/blog/image-1.jpg"
      />
      <div className="flex justify-end px-5">
        <Tooltip title="Verified Seller">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            badgeContent={
              <TiTick className="text-white text-base bg-blue-600 rounded-full"></TiTick>
            }
            className="-mt-7"
          >
            <Avatar
              alt="Travis Howard"
              src="/static/images/avatar/2.jpg"
              sx={{ width: 56, height: 56 }}
            />
          </Badge>
        </Tooltip>
      </div>
      <CardContent className="text-center">
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <div className="text-center text-gray-500">
          <p className="font-semibold">
            <IoLocationSharp className="inline text-xl"></IoLocationSharp>{" "}
            Location :
          </p>
        </div>
      </CardContent>
      <div className="grid grid-cols-2 text-center text-gray-500">
        <div className="border-t border-b border-r py-5">
          <AiOutlineCar className="inline text-xl"></AiOutlineCar>
          <p className="font-semibold">Model Year</p>
        </div>
        <div className="border-t border-b py-5">
          <TbLicense className="inline text-xl"></TbLicense>
          <p className="font-semibold">Registration Year</p>
        </div>
      </div>
      <div className="grid grid-cols-2 text-center text-gray-500">
        <div className="border-b border-r py-5">
          <IoPricetagsOutline className="inline text-xl"></IoPricetagsOutline>
          <p className="font-semibold">Buying Price</p>
        </div>
        <div className="border-b py-5">
          <MdOutlinePriceChange className="inline text-xl"></MdOutlinePriceChange>
          <p className="font-semibold">Resell Price</p>
        </div>
      </div>
      <div className="grid grid-cols-2 text-center text-gray-500">
        <div className="border-b border-r py-5">
          <IoMdTime className="inline text-xl"></IoMdTime>
          <p className="font-semibold">Post Time</p>
        </div>
        <div className="border-b py-5">
          <BsPerson className="inline text-xl"></BsPerson>
          <p className="font-semibold">Seller Name</p>
        </div>
      </div>
      <CardActions className="justify-center my-5">
        <Button>Book Now</Button>
      </CardActions>
    </Card>
  );
};

export default AdvertiseCard;
