import {
  img_array,
  imgHeadingsArray,
  imgDescriptionsArray,
} from "../utils/constants";
import { motion } from "framer-motion";
import AboutGym from "./AboutGym";

const ThreeCards = () => {
  return (
    <div className="min-h-screen md:h-screen bg-purple-50 sticky top-[112px]">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="card flex flex-col md:flex-row justify-around ml-4 mr-4 sm:ml-8 sm:mr-8 md:ml-16 md:mr-16"
      >
        {img_array.map((img, index) => {
          return (
            <div
              key={index}
              className=" 
              cards w-full sm:w-[45%] md:w-[25%] m-0 p-4 mt-10 md:mt-28 text-center justify-center items-center flex flex-col min-h-72 bg-white"
            >
              <img className="m-2" src={img} alt="" />
              <h1 className="m-2 text-xl sm:text-2xl font-bold">
                {imgHeadingsArray[index]}
              </h1>
              <p className="m-2 text-gray-500">{imgDescriptionsArray[index]}</p>
            </div>
          );
        })}
      </motion.div>
      <AboutGym />
    </div>
  );
};

export default ThreeCards;
