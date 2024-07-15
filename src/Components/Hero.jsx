import heroine from "../assets/heroine.png";
import { PURPOSE, TAGLINE } from "../utils/constants";
import { motion } from "framer-motion";
import Bg from "./Bg";
// import { Parallax } from "react-parallax";

const Hero = () => {
  return (
    <div className="">
      <Bg />
      <div className="flex">
        <div className="yes">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeIn",
              type: "spring",
              stiffness: 70,
            }}
            src={heroine}
            className="heroine w-[42rem]"
            alt="Heroine"
          />
        </div>
        <div className="flex flex-col items-center ml-16 arsenal-sc-regular">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[5.5rem] mt-32 tracking-wider web-title"
          >
            <span className="text-9xl">F</span>it
            <span className="text-9xl">L</span>ife{" "}
            <span className="text-9xl">G</span>ym
          </motion.h1>
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl tracking-wide "
          >
            {TAGLINE}
          </motion.h3>
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl tracking-wide mt-10 max-w-xl text-center"
          >
            {PURPOSE}
          </motion.h3>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            <motion.button className="btn contact-hover rounded-full text-white tracking-wider p-3 pl-6 pr-6 mt-6">
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
