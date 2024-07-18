import {
  img_array,
  imgHeadingsArray,
  imgDescriptionsArray,
} from "../utils/constants";
import { motion } from "framer-motion";
import AboutGym from "./AboutGym";

const ThreeCards = () => {
  return (
    <div className="h-screen bg-purple-50 sticky top-[112px]">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-around ml-16 mr-16"
      >
        {img_array.map((img, index) => {
          return (
            <div
              key={index}
              className="cards w-[25%] m-4 p-4 mt-28 text-center justify-center items-center flex flex-col min-h-72"
            >
              <img className="m-2" src={img} alt="" />
              <h1 className="m-2 text-2xl font-bold">
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
