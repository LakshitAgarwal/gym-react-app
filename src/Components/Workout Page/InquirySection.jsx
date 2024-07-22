import { IoIosCall } from "react-icons/io";
import { INQUIRY_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const InquirySection = () => {
  return (
    <div className="mt-32 relative">
      <div className="bg-black max-h-[30rem] overflow-hidden ">
        <img className="w-screen opacity-40" src={INQUIRY_URL} alt="" />
      </div>
      <div className="text-white absolute inset-0 justify-center flex flex-col items-center">
        <div className="text-center">
          <h4 className="text-xl arsenal-sc-regular p-2">—Free Service—</h4>
          <h1 className="text-xl md:text-5xl font-bold w-[80%] md:w-2/3 mx-auto md:pt-2">
            GET A FREE CONSULTANCY RIGHT NOW HERE!
          </h1>
        </div>
        <div className="flex flex-col  md:flex-row mt-6 md:gap-10">
          <Link to="/contact">
            <button className="services-btn rounded-lg text-white md:tracking-wider mx-auto arsenal-sc-regular p-2 md:p-3 md:pl-4 md:pr-4 md:mt-6 mb-4">
              Book Your Class &rarr;
            </button>
          </Link>
          <div className="flex my-auto text-lg">
            <IoIosCall className=" phn-icon rounded-full text-2xl md:text-4xl p-1" />
            <p className="pl-2 md:pl-3 dm-sans-font">+91 9511517845</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquirySection;
