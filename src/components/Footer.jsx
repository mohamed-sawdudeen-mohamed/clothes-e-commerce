import {
  EmailOutlined,
  Facebook,
  Instagram,
  LocalPhoneOutlined,
  LocationOnOutlined,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import React from "react";

function Footer() {
  const socialStyle = "m-3 rounded-full cursor-pointer p-2 text-white ";
  return (
    <div className="flex items-center justify-around p-2">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        <h1 className="text-[25px]">MSCode</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          temporibus eos qui ducimus quo eum officia, beatae quisquam quam iure
          possimus ipsa nisi iste eligendi debitis eius doloribus perspiciatis?
          Asperiores.
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialStyle + "bg-blue-700"}>
            <Facebook />
          </div>
          <div className={socialStyle + "bg-orange-500"}>
            <Instagram />
          </div>
          <div className={socialStyle + "bg-sky-300"}>
            <Twitter />
          </div>
          <div className={socialStyle + "bg-red-600"}>
            <Pinterest />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-2">
        <div className="flex m-3">
          <LocationOnOutlined />
          <p className="pl-3">Galle Sri-Lanka</p>
        </div>
        <div className="flex m-3">
          <LocalPhoneOutlined />
          <p className="pl-3">077-7777777</p>
        </div>
        <div className="flex m-3">
          <EmailOutlined />
          <p className="pl-3">sawdudeenm@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
