import heroine from "../assets/heroine.png";
import { PURPOSE, TAGLINE } from "../utils/constants";
import { motion } from "framer-motion";
import Bg from "./Bg";
import ThreeCards from "./ThreeCards";

const Hero = () => {
  return (
    <div>
      <Bg />
      <div className="flex flex-col lg:flex-row items-center lg:items-start sticky top-[100px] lg:space-x-8">
        <div className="lg:block hidden">
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
            className="w-[28rem] lg:w-full"
            alt="Heroine"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start mt-8 lg:mt-0">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl lg:text-[5.5rem] tracking-wider text-center lg:text-left"
          >
            <span className="text-7xl lg:text-9xl">F</span>it
            <span className="text-7xl lg:text-9xl">L</span>ife{" "}
            <span className="text-7xl lg:text-9xl">G</span>ym
          </motion.h1>
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg lg:text-2xl tracking-wide text-center lg:text-left mt-4 lg:mt-0"
          >
            {TAGLINE}
          </motion.h3>
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-base lg:text-xl tracking-wide mt-4 lg:mt-10 max-w-xl text-center lg:text-left"
          >
            {PURPOSE}
          </motion.h3>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="mt-6"
          >
            <motion.button className="btn contact-hover rounded-full text-white tracking-wider p-3 pl-6 pr-6">
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </div>
      <ThreeCards />
    </div>
  );
};

export default Hero;
