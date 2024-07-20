import {
  STICKY_CARDS_CONTENT,
  STICKY_HEADING,
  STICKY_PARA_1,
  STICKY_PARA_2,
} from "../utils/constants";
import Carousal from "./Carousal";

const StickySidebar = () => {
  return (
    <div className="mt-24 md:mt-36">
      <div className="container">
        <div className="left-side text-center md:text-left md:w-1/3">
          <h1 className="text-4xl md:text-6xl font-bold md:font-extrabold tracking-wide mb-4 md:mb-10">
            {STICKY_HEADING}
          </h1>
          <p className="my-4 mb-10 md:my-8 text-lg text-gray-700">
            {STICKY_PARA_1}
          </p>
          <p className="md:block hidden text-lg text-gray-700">
            {STICKY_PARA_2}
          </p>
        </div>
        <div className="right-side">
          {STICKY_CARDS_CONTENT.map((s, i) => {
            return (
              <div key={i} className="papaDiv">
                <div className="w-[88%] md:w-3/4 h-full mx-auto my-8 md:mt-10 pl-3 md:pl-0 div-content">
                  <h1 className="sticky-button p-2 md:p-3 w-fit rounded-lg text-sm md:text-base font-semibold text-white">
                    {s.heading}
                  </h1>
                  <p className="dm-sans-font text-lg tracking-wider  mt-4 md:mt-7 text-gray-700">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Carousal />
    </div>
  );
};

export default StickySidebar;
