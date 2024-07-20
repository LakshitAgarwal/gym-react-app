import logo from "../assets/gym-logo.png";
import Hero from "./Hero";
// import Bg from "./Bg";

const Navbar = () => {
  return (
    <div className="bg-purple-50 md:bg-transparent overflow-hidden">
      <div className="flex justify-between mr-20 ml-10 sticky top-0">
        {/* <Bg /> */}
        <img className="w-28" src={logo} alt="Gym Logo" />
        <ul className="flex gap-8 m-auto text-sm font-ubuntu ">
          <li className="cursor-pointer hover:text-purple-700 ">Home</li>
          <li className="cursor-pointer hover:text-purple-700 ">Workout</li>
          <li className="cursor-pointer hover:text-purple-700 ">Food</li>
          <li className="cursor-pointer hover:text-purple-700 ">
            Consultation
          </li>
          <li className="cursor-pointer hover:text-purple-700 ">About Us</li>
        </ul>
        <button className="btn rounded-full text-white p-2 pl-4 pr-4 mt-auto mb-auto">
          Join Now
        </button>
      </div>
      <Hero />
    </div>
  );
};

export default Navbar;
