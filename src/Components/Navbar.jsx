import { useState } from "react";
import logo from "../assets/gym-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hamValue, setHamValue] = useState(false);
  const handleHamburger = () => {
    setHamValue(!hamValue);
  };
  return (
    <div className="bg-purple-50 md:bg-transparent">
      <div className="flex md:flex-row flex-col ml-2 mr-3 justify-between md:mr-20 md:ml-10 md:sticky md:top-0">
        <div className="flex justify-between">
          <Link to="/">
            <img className=" w-20 md:w-28" src={logo} alt="Gym Logo" />
          </Link>
          {hamValue ? (
            <IoClose
              onClick={handleHamburger}
              className="md:hidden text-3xl my-auto mr-4 text-purple-900"
            />
          ) : (
            <GiHamburgerMenu
              onClick={handleHamburger}
              className="md:hidden text-3xl my-auto mr-4 text-purple-900"
            />
          )}
        </div>
        {hamValue ? (
          <div className="md:hidden mx-auto text-center">
            <ul className="flex md:flex-row flex-col gap-4 md:gap-8 m-auto text-sm font-ubuntu">
              <Link to="/">
                <li className="cursor-pointer hover:text-purple-700 ">Home</li>
              </Link>
              <Link to="/workout">
                <li className="cursor-pointer hover:text-purple-700 ">
                  Workout
                </li>
              </Link>
              <Link to="/about">
                <li className="cursor-pointer hover:text-purple-700 ">
                  About Us
                </li>
              </Link>
              <Link to="/contact">
                <li className="cursor-pointer hover:text-purple-700 ">
                  Consultation
                </li>
              </Link>
            </ul>
            <button className="btn w-fit rounded-full text-white p-2 pl-4 pr-4 mx-auto md:mx-0 mt-4 md:mt-auto mb-7 md:mb-auto">
              Join Now
            </button>
          </div>
        ) : null}
        <div className="  m-auto hidden md:block ">
          <ul className="flex md:flex-row flex-col gap-4 md:gap-8 m-auto text-lg font-ubuntu">
            <Link to="/">
              <li className="cursor-pointer hover:text-purple-800 ">Home</li>
            </Link>
            <Link to="/workout">
              <li className="cursor-pointer hover:text-purple-800 ">Workout</li>
            </Link>
            <Link to="/about">
              <li className="cursor-pointer hover:text-purple-800 ">
                About Us
              </li>
            </Link>
            <Link to="/contact">
              <li className="cursor-pointer hover:text-purple-800 ">
                Consultation
              </li>
            </Link>
          </ul>
        </div>
        <Link to="/contact" className="my-auto">
          <button className="btn w-fit rounded-full text-white p-2 pl-4 pr-4 mx-auto md:mx-0 mt-4 md:mt-auto mb-7 md:mb-auto hidden md:block">
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
