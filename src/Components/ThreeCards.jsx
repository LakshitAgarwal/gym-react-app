import {
  img_array,
  imgHeadingsArray,
  imgDescriptionsArray,
} from "../utils/constants";
import { motion } from "framer-motion";

const ThreeCards = () => {
  return (
    <div className="h-screen bg-white sticky top-[112px]">
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="flex justify-around ml-16 mr-16"
      >
        {img_array.map((img, index) => {
          return (
            <div className="cards w-[25%] m-4 p-4 mt-28 text-center justify-center items-center flex flex-col min-h-72">
              <img className="m-2" src={img} alt="" />
              <h1 className="m-2 text-2xl font-bold">
                {imgHeadingsArray[index]}
              </h1>
              <p className="m-2 text-gray-500">{imgDescriptionsArray[index]}</p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ThreeCards;
