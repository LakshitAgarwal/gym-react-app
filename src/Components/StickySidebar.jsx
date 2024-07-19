import {
  STICKY_CARDS_CONTENT,
  STICKY_HEADING,
  STICKY_PARA_1,
  STICKY_PARA_2,
} from "../utils/constants";

const StickySidebar = () => {
  return (
    <div className="mt-36">
      <div className="container">
        <div className="left-side w-1/3">
          <h1 className="text-6xl font-extrabold tracking-wide mb-10">
            {STICKY_HEADING}
          </h1>
          <p className="my-8 text-lg text-gray-700">{STICKY_PARA_1}</p>
          <p className=" text-lg text-gray-700">{STICKY_PARA_2}</p>
        </div>
        <div className="right-side">
          {STICKY_CARDS_CONTENT.map((s, i) => {
            return (
              <div key={i} className="papaDiv">
                <div className="w-3/4 h-full mx-auto mt-10">
                  <h1 className="sticky-button p-3 w-fit rounded-lg font-semibold text-white">
                    {s.heading}
                  </h1>
                  <p className="dm-sans-font text-lg tracking-wider mt-7 text-gray-700">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StickySidebar;
