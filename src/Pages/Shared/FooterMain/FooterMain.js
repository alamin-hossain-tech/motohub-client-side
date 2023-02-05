import { Footer } from "flowbite-react";
import logo from "../../../Assets/Logo.svg";
import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPhone,
  BsTelephoneInbound,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { LocalActivity } from "@mui/icons-material";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
const FooterMain = () => {
  const images = [
    "https://i.ibb.co/D1024Zx/pexels-gustavo-fring-4895421.jpg",
    "https://i.ibb.co/hYtVgth/pexels-gustavo-fring-4173194.jpg",
    "https://i.ibb.co/XDY4r5F/pexels-gustavo-fring-4173189.jpg",
    "https://i.ibb.co/Krjd2KN/pexels-antoni-shkraba-7144179.jpg",
    "https://i.ibb.co/C5HHVht/pexels-antoni-shkraba-7144226.jpg",
    "https://i.ibb.co/dcY8G5B/pexels-jeshootscom-13861.jpg",
  ];
  return (
    <div>
      <div className="footer text-white bg-neutral-700 pt-20 pb-16">
        <div className="flex gap-12 justify-between container mx-auto pb-6">
          <div className="w-1/4">
            <img className="h-6 md:h-9" src={logo} alt="" />
            <span class="self-center text-xl lg:text-3xl font-semibold whitespace-nowrap dark:text-white text-[#4366B0]">
              MotoHub
            </span>
            <p className="text-white pt-2">
              An automotive marketplace, has launched a new customer car buying
              experience for the customers of dealerships.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold pt-6 pb-3">Links</h4>
            <div>
              <ul className=" font-medium ">
                <li className="hover:text-blue-600 hover:cursor-pointer">
                  Home
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer">
                  Products
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer">
                  About Us
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer">
                  Contact Us
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer">
                  News & Blogs
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold pt-6 pb-3">
              Important Links
            </h4>
            <div>
              <ul className=" font-medium ">
                <li className="hover:text-blue-600 hover:cursor-pointer">
                  Policy
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer">
                  Privacy
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer">
                  Insurance
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer">
                  Car Loan
                </li>
                <li className="hover:text-blue-600 hover:cursor-pointer">
                  Terms & Condition
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold pt-6 pb-3">Our Gallery</h4>
            <PhotoProvider>
              <div className="foo grid grid-cols-3 gap-5">
                {images.map((item, index) => (
                  <PhotoView key={index} src={item}>
                    <img
                      className="h-16 rounded shadow hover:cursor-pointer"
                      src={item}
                      alt=""
                    />
                  </PhotoView>
                ))}
              </div>
            </PhotoProvider>
          </div>
        </div>
        <div className="container  mx-auto flex justify-between gap-5 ">
          <div className="border-t border-neutral-600  ">
            <h4 className="text-2xl font-semibold pt-6 pb-3"> Location</h4>
            <div className="flex gap-3 items-center">
              <div className=" flex justify-center items-center p-3 rounded-full bg-blue-600">
                <HiOutlineLocationMarker className="text-2xl"></HiOutlineLocationMarker>
              </div>

              <div>
                <p className="">
                  3/C, R4, Hasan Ali Road,
                  <br /> Nayabazar, Dhaka - 1263
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-5 border-t border-neutral-600 border- w-1/3 justify-center">
            <div className="">
              <h4 className="text-2xl font-semibold pt-6 pb-3"> Mail</h4>

              <div className="flex gap-2 items-center">
                <div className=" flex justify-center items-center p-3 rounded-full bg-blue-600">
                  <MdOutlineEmail className="text-2xl"></MdOutlineEmail>
                </div>

                <div className="">
                  <p className="hover:text-blue-600 hover:cursor-pointer">
                    info@motohub.com
                  </p>
                  <p className="hover:text-blue-600 hover:cursor-pointer">
                    serv@motohub.com
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-semibold pt-6 pb-3">Call Now</h4>

              <div className="flex gap-2 items-center">
                <div className=" flex justify-center items-center p-3  rounded-full bg-blue-600">
                  <BsPhone className="text-2xl"></BsPhone>
                </div>

                <div>
                  <p className="hover:text-blue-600 hover:cursor-pointer">
                    +998-82198913
                  </p>
                  <p className="hover:text-blue-600 hover:cursor-pointer">
                    +998-89281329
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-600">
            <h4 className="text-2xl font-semibold pt-6 pb-3">Sales Hours</h4>
            <div className="flex gap-5">
              <div>
                <p className="text-md">Sunday-Thursday : 11:00AM-10:00PM</p>
                <p className="text-md">Saturday : 02:30PM-09:00PM</p>
              </div>
              <div>
                <p className="text-md">Ocation Day : Closed</p>
                <p className="text-md">Friday : Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-900 py-3 text-center text-white">
        <p className="text-neutral-400 text-sm ">
          Motohub © {new Date().getFullYear()} - All Rights Reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default FooterMain;
