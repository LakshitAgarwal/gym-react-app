import { useState } from "react";
import logo from "../assets/gym-logo.png";
import Hero from "./Hero";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [hamValue, setHamValue] = useState(false);
  const handleHamburger = () => {
    setHamValue(!hamValue);
  };
  return (
    <div className="bg-purple-50 md:bg-transparent">
      <div className="flex md:flex-row flex-col ml-2 mr-3 justify-between md:mr-20 md:ml-10 sticky top-0">
        <div className="flex justify-between">
          <img className=" w-20 md:w-28" src={logo} alt="Gym Logo" />
          <GiHamburgerMenu
            onClick={handleHamburger}
            className="md:hidden text-3xl my-auto mr-4 text-purple-900"
          />
        </div>
        {hamValue ? (
          <div className="md:hidden mx-auto text-center">
            <ul className="flex md:flex-row flex-col gap-4 md:gap-8 m-auto text-sm font-ubuntu">
              <li className="cursor-pointer hover:text-purple-700 ">Home</li>
              <li className="cursor-pointer hover:text-purple-700 ">Workout</li>
              <li className="cursor-pointer hover:text-purple-700 ">Food</li>
              <li className="cursor-pointer hover:text-purple-700 ">
                Consultation
              </li>
              <li className="cursor-pointer hover:text-purple-700 ">
                About Us
              </li>
            </ul>
            <button className="btn w-fit rounded-full text-white p-2 pl-4 pr-4 mx-auto md:mx-0 mt-4 md:mt-auto mb-7 md:mb-auto">
              Join Now
            </button>
          </div>
        ) : null}
        <div className="  m-auto hidden md:block ">
          <ul className="flex md:flex-row flex-col gap-4 md:gap-8 m-auto text-sm font-ubuntu">
            <li className="cursor-pointer hover:text-purple-700 ">Home</li>
            <li className="cursor-pointer hover:text-purple-700 ">Workout</li>
            <li className="cursor-pointer hover:text-purple-700 ">Food</li>
            <li className="cursor-pointer hover:text-purple-700 ">
              Consultation
            </li>
            <li className="cursor-pointer hover:text-purple-700 ">About Us</li>
          </ul>
        </div>
        <button className="btn w-fit rounded-full text-white p-2 pl-4 pr-4 mx-auto md:mx-0 mt-4 md:mt-auto mb-7 md:mb-auto hidden md:block">
          Join Now
        </button>
      </div>
      <Hero />
    </div>
  );
};

export default Navbar;
