import {
  ABOUT_CONTENT_PARA1,
  ABOUT_CONTENT_PARA2,
  ABOUT_HEADING,
  ATHELETE_URL,
} from "../utils/constants";
import { motion } from "framer-motion";
import ServicsSection from "./ServicsSection";

const AboutGym = () => {
  return (
    <div className="bg-purple-50">
      <div className="flex mt-28 ">
        <img
          className="w-[40%] rounded-3xl ml-40 mb-40 mr-14 hover:scale-105 transition duration-500 ease-in-out"
          src={ATHELETE_URL}
          alt=""
        />
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-[38%] flex flex-col justify-center content h-fit"
        >
          <h1 className="text-[3.5rem] tracking-wider text-[#ff0034] arsenal-sc-regular">
            <span className="text-7xl">A</span>bout{" "}
            <span className="text-7xl">O</span>ur{" "}
            <span className="text-7xl">G</span>ym
          </h1>
          <h2 className="mt-0 font-bold text-xl">{ABOUT_HEADING}</h2>
          <p className="mt-8 text-gray-500 text-lg">{ABOUT_CONTENT_PARA1}</p>
          <p className="mt-3 text-gray-500 text-lg">{ABOUT_CONTENT_PARA2}</p>
          <button className="btn arsenal-sc-regular contact-hover w-2/6 rounded-full text-white tracking-wider p-3 pl-6 pr-6 mt-6">
            Take a Tour &rarr;
          </button>
        </motion.div>
      </div>
      <ServicsSection />
    </div>
  );
};

export default AboutGym;
