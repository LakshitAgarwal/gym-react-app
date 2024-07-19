import { SERVICES_CARD_INFO } from "../utils/constants";
import { motion } from "framer-motion";
import StickySidebar from "./StickySidebar";

const ServicesSection = () => {
  return (
    <div className="bg-purple-50 m-0 p-0">
      <div className="text-center">
        <h1 className="text-2xl font-extrabold text-purple-800 arsenal-sc-bold">
          SERVICES
        </h1>
        <h1 className="text-5xl font-bold pt-3">Our Featured Classes</h1>
        <p className="mx-auto w-1/3 text-lg py-4 pb-6 text-gray-500">
          Our Trainers know what is best for your body and they work to the best
          of your needs.
        </p>
      </div>
      <div className="flex flex-wrap mx-28">
        {SERVICES_CARD_INFO.map((service, i) => {
          return (
            <motion.div
              key={i}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
              className="w-full sm:w-1/2 lg:w-1/3 p-4 flex"
            >
              <div className="bg-white rounded-lg shadow-xl flex flex-col items-center group transition duration-500 overflow-hidden">
                <div className="w-full h-auto overflow-hidden">
                  <img
                    className="w-full h-auto transform scale-100 group-hover:scale-125 transition-transform duration-500"
                    src={service.img}
                    alt={service.heading}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="mt-10 text-3xl font-bold group-hover:text-purple-700 transition-colors duration-500">
                    {service.heading}
                  </h1>
                  <p className="text-center mt-6 px-9 text-lg text-gray-500">
                    {service.description}
                  </p>
                  <button className="services-btn rounded-lg text-white tracking-wider arsenal-sc-regular p-3 pl-6 pr-6 mt-6 mb-6">
                    Join Now
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <StickySidebar />
    </div>
  );
};

export default ServicesSection;
