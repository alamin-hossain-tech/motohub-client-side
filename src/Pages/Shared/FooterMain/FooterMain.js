import { Footer } from "flowbite-react";
import logo from "../../../Assets/brand-logo.svg";
import React from "react";
const FooterMain = () => {
  return (
    <Footer container={true} className="bg-gray-200 mt-5 ">
      <div className="container mx-auto py-7">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="w-24">
            <img className="hover:cursor-pointer" src={logo} alt="" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="MotoHub™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {/* <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} /> */}
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterMain;
