import {
  DESCRIPTION_1,
  DESCRIPTION_2,
  HEADING_1,
  HEADING_2,
  NUTRITION_URL,
  SQUARE_DIV_IMG_1_URL,
  SQUARE_DIV_IMG_2_URL,
  WORKOUT_URL,
} from "../../utils/constants";

const SquareCards = () => {
  return (
    <div className="md:my-36">
      <div className="w-[90%] md:w-[80%] mx-auto overflow-hidden shadow-2xl bg-white rounded-2xl">
        <div className="flex flex-col md:flex-row">
          <div className="overflow-hidden md:w-1/2">
            <img
              className="w-full hover:scale-110 duration-500"
              src={SQUARE_DIV_IMG_1_URL}
              alt=""
            />
          </div>
          <div className="text-center my-auto md:w-1/2">
            <img className="mx-auto mt-8" src={WORKOUT_URL} alt="" />
            <h1 className="md:text-4xl  text-2xl dm-sans-bold font-bold my-2">
              {HEADING_1}
            </h1>
            <p className="w-3/4 text-gray-500 text-sm mx-auto md:mt-6 mb-8">
              {DESCRIPTION_1}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="text-center my-auto md:w-1/2 order-2 md:order-1">
            <img className="mx-auto mt-8" src={NUTRITION_URL} alt="" />
            <h1 className="md:text-4xl  text-2xl dm-sans-bold font-bold my-2">
              {HEADING_2}
            </h1>
            <p className="w-3/4 text-gray-500 text-sm mx-auto md:mt-6 mb-8">
              {DESCRIPTION_2}
            </p>
          </div>
          <div className="overflow-hidden md:w-1/2 order-1 md:order-2">
            <img
              className="w-full hover:scale-110 duration-500"
              src={SQUARE_DIV_IMG_2_URL}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareCards;
