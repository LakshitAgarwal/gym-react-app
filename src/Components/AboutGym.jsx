import {
  ABOUT_CONTENT_PARA1,
  ABOUT_CONTENT_PARA2,
  ABOUT_HEADING,
  ATHELETE_URL,
} from "../utils/constants";
import { motion } from "framer-motion";
import ServicesSection from "./ServicesSection";

const AboutGym = () => {
  return (
    <div className="bg-purple-50">
      <div className="flex flex-col md:flex-row mt-28 ">
        <img
          className=" md:ml-40 md:mr-14 mx-auto w-[85%] md:w-[40%] rounded-3xl mb-8 md:mb-40 hover:scale-105 transition duration-500 ease-in-out"
          src={ATHELETE_URL}
          alt=""
        />
        <motion.div
          initial={{ z: 100, opacity: 0 }}
          whileInView={{ z: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeIn" }}
          className="w-[80%] m-auto md:w-[38%] flex flex-col text-center md:text-left items-center md:items-start justify-center content h-fit"
        >
          <h1 className="text-4xl md:text-[3.5rem] pb-5 md:pb-3 tracking-wider text-purple-800 arsenal-sc-regular">
            <span className="text-6xl md:text-7xl">A</span>bout{" "}
            <span className="text-6xl md:text-7xl">O</span>ur{" "}
            <span className="text-6xl md:text-7xl">G</span>ym
          </h1>
          <h2 className="mt-0 font-bold text-xl">{ABOUT_HEADING}</h2>
          <p className="mt-8 text-gray-500 text-lg">{ABOUT_CONTENT_PARA1}</p>
          <p className="mt-3 text-gray-500 text-lg">{ABOUT_CONTENT_PARA2}</p>
          <button className="btn arsenal-sc-regular contact-hover w-1/2 md:w-2/6 rounded-full text-white tracking-wider p-3 pl-6 pr-6 mt-6">
            Take a Tour &rarr;
          </button>
        </motion.div>
      </div>
      <ServicesSection />
    </div>
  );
};

export default AboutGym;
