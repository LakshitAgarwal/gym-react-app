import heroine from "../assets/heroine.png";
import { PURPOSE, TAGLINE } from "../utils/constants";
import { motion } from "framer-motion";
import Bg from "./Bg";
import ThreeCards from "./ThreeCards";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-purple-50 md:bg-transparent">
      <div className="hidden  md:block">
        <Bg />
      </div>
      <div className="flex flex-col md:flex-row sticky top-[100px]">
        <div className="md:h-[85.8vh] md:flex md:items-end hidden">
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
            className="heroine w-[90vh]"
            alt="Heroine"
          />
        </div>
        <div className="flex flex-col items-center md:my-auto md:ml-16 w-full md:w-fit arsenal-sc-regular text-center">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl md:text-[5.5rem] tracking-wider web-title"
          >
            <span className="text-8xl md:text-9xl">F</span>it
            <span className="text-8xl md:text-9xl">L</span>ife
            <span className="block md:inline">
              <span className="text-8xl md:text-9xl">G</span>ym
            </span>
          </motion.h1>
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl tracking-wide mt-4 md:mt-0"
          >
            {TAGLINE}
          </motion.h3>
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl tracking-wide mt-6 md:mt-10 max-w-xs md:max-w-xl"
          >
            {PURPOSE}
          </motion.h3>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            <Link to="/contact">
              <motion.button className="btn contact-hover rounded-full text-white tracking-wider p-3 pl-6 pr-6 mt-6">
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
      <ThreeCards />
    </div>
  );
};

export default Hero;
