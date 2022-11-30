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
import { Button } from "flowbite-react";

import React, { useContext } from "react";
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

const AdvertiseCard = ({ product }) => {
  console.log(product);
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
  const navigate = useNavigate();
  const [isVerify] = useVerify(seller_email);
  console.log(isVerify);
  const { user } = useContext(AuthContext);
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

  const getTime = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dataTime = new Date(time);
    let month = months[dataTime.getMonth()];
    const year = dataTime.getFullYear();
    const day = dataTime.getDate();
    const date = day + ", " + month + " " + year;
    return date;
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

        {isVerify ? (
          <CardActions className="justify-center my-5">
            <Button onClick={handleOpen}>Book Now</Button>
          </CardActions>
        ) : (
          <div className="pt-5"></div>
        )}
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {user?.displayName ? user.displayName : ""}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default AdvertiseCard;
