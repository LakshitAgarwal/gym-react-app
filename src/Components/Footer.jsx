import { FOOTER_ABOUT } from "../utils/constants";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-purple-950">
      <div className="w-[85%] mx-auto text-white flex justify-around">
        <div className="w-56">
          <h1 className="footer-heading pt-6 text-4xl font-bold arsenal-sc-bold">
            About
          </h1>
          <p className="py-6 dm-sans-font">{FOOTER_ABOUT}</p>
          <div className="flex justify-around w-[80%] pb-8 text-3xl">
            <a
              href="https://x.com/LakshitAgarwal7 "
              target="_blank"
              className="hover:text-black"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/lakshit-agarwal-6082b9216/ "
              target="_blank"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/lakshit.7811/ "
              target="_blank"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="w-64">
          <h1 className="footer-heading pt-6 text-4xl font-bold arsenal-sc-bold">
            Working Hours
          </h1>
          <div className="py-6 dm-sans-font">
            <p className="pb-2 text-xl">Monday - Saturday</p>
            <p className="py-2 text-xl">10:00am - 6:00pm </p>
            <p className="py-2 text-xl">Sunday: Closed</p>
          </div>
        </div>
        <div className="w-72">
          <h1 className="footer-heading pt-6 text-4xl font-bold arsenal-sc-bold">
            Contact Us
          </h1>
          <p className="py-6 dm-sans-font">
            Agarwal Enterprises, Near ITO, Rani Bazar, Bikaner 334001
          </p>
          <div className="flex text-lg">
            <IoIosCall className="my-auto" />
            <p className="pl-3 dm-sans-font">+91 9511517845</p>
          </div>
          <div className="flex text-lg">
            <IoMdMail className="my-auto" />
            <p className="pl-3 dm-sans-font">lakshitcollege@gmail.com</p>
          </div>
        </div>
      </div>
      <p className="text-center text-white text-sm dm-sans-font py-3">Copyright © 2023 gym | Created by Lakshit Agarwal</p>
    </div>
  );
};

export default Footer;
