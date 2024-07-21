import { motion } from "framer-motion";
import { WORKOUT_CARDS_CONTENT, img_array } from "../../utils/constants";

const WorkoutCards = () => {
  return (
    <div className="min-h-screen md:h-screen bg-purple-50 sticky top-[112px]">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="card flex flex-col md:flex-row justify-around ml-4 mr-4 sm:ml-8 sm:mr-8 md:ml-16 md:mr-16"
      >
        {WORKOUT_CARDS_CONTENT.map((cc, i) => {
          return (
            <div
              key={i}
              className=" 
              workout-cards rounded-2xl w-full sm:w-[45%] md:w-[25%] m-0 p-4 mt-10 md:mt-28 text-center justify-center items-center flex flex-col min-h-72 bg-white"
            >
              <img className="m-2" src={img_array[i]} alt="" />
              <h1 className="m-2 text-xl sm:text-2xl font-bold">
                {cc.heading}
              </h1>
              <p className="m-2 text-gray-500">{cc.description}</p>
              <button className="services-btn hover:bg-purple-50 hover:text-purple-900 rounded-lg text-white tracking-wider mx-auto arsenal-sc-bold p-3 pl-4 pr-4 mt-6 mb-4">
                Book Your Class &rarr;
              </button>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default WorkoutCards;
