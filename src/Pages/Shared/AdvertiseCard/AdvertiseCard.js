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
import { BsPerson } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { IoLocationSharp, IoPricetagsOutline } from "react-icons/io5";
import { MdOutlinePriceChange } from "react-icons/md";
import { TbLicense } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const AdvertiseCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://flowbite.com/docs/images/blog/image-1.jpg"
        />
        <div className="px-5">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            badgeContent={
              <Tooltip title="Verified Seller" placement="top">
                <IconButton>
                  <TiTick className="text-white text-base bg-blue-600 rounded-full inline"></TiTick>
                </IconButton>
              </Tooltip>
            }
            className="-mt-7"
          >
            <Avatar
              alt="Travis Howard"
              src="/static/images/avatar/2.jpg"
              sx={{ width: 56, height: 56 }}
            />
          </Badge>
        </div>
        <CardContent className="text-center">
          <Typography gutterBottom variant="h5" component="div">
            Lizard{" "}
            <Tooltip title="Verified Seller" placement="top">
              <IconButton>
                <TiTick className="text-white text-base bg-blue-600 rounded-full inline"></TiTick>
              </IconButton>
            </Tooltip>
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
            <p className="">
              Al-Amin Hossain{" "}
              <Tooltip title="Verified Seller" placement="top">
                <IconButton>
                  <TiTick className="text-white text-base bg-blue-600 rounded-full inline"></TiTick>
                </IconButton>
              </Tooltip>
            </p>
          </div>
        </div>
        <CardActions className="justify-center my-5">
          <Button onClick={handleOpen}>Book Now</Button>
        </CardActions>
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
