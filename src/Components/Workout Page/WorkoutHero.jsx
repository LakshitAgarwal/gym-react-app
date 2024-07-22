import { motion } from "framer-motion";
import { WORKOUT_HEADING, WORKOUT_HERO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const WorkoutHero = () => {
  return (
    <div className="relative h-[92vh] mb-10 md:mb-0">
      <img
        src={WORKOUT_HERO_URL}
        className="w-full h-full object-cover object-center md:h-auto md:object-contain -mt-2 md:-mt-5"
        alt="Workout Hero"
      />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute inset-0 mt-[4rem] flex flex-col items-center"
      >
        <h1 className="text-purple-50 text-3xl md:leading-[4rem] md:text-6xl w-[80%] md:w-1/2 arsenal-sc-bold text-center mx-auto tracking-wider flex justify-center">
          {WORKOUT_HEADING}
        </h1>
        <div className="text-center">
          <Link to="/contact">
            <button className="services-btn font-bold hover:bg-purple-50 hover:text-purple-900 rounded-lg text-white tracking-wider mx-auto arsenal-sc-bold p-2 md:p-3 pl-4 md:pl-8 pr-4 md:pr-8 mt-6 mb-6">
              Join Now &rarr;
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkoutHero;
