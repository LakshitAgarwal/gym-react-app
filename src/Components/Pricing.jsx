import { PRICING } from "../utils/constants";
import Accordian from "./Accordian";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="bg-purple-50">
      <div className="text-center my-10 mt-32">
        <h1 className="text-3xl font-extrabold text-purple-800 arsenal-sc-bold">
          Membership
        </h1>
        <h1 className="text-2xl md:text-4xl font-bold pt-3 w-[90%] md:w-1/2 mx-auto dm-sans-bold">
          Crushing your health and fitness goals starts here...
        </h1>
      </div>
      <div className="flex flex-col md:flex-row md:justify-around md:w-[90%] mx-auto">
        {PRICING.map((p, i) => {
          return (
            <div
              key={i}
              className="pricing-container md:hover:scale-[1.15] transition-transform duration-300 ease-in-out w-[85%] h-[450px] mx-auto md:p-4 md:m-4 text-white md:min-h-[480px] bg-white max-w-[350px] rounded-xl mb-10 md:mb-24"
            >
              <div className="text-center w-3/4 mx-auto">
                <h2 className="text-5xl arsenal-sc-bold font-bold text-black py-5">
                  {p.plan}
                </h2>
                <div className="flex justify-center items-end mx-auto text-purple-800 pb-7">
                  <p className="text-3xl font-bold ">₹{p.price}</p>
                  <span>/mo</span>
                </div>
                <div className="mx-auto w-fit">
                  {p.features.map((f, j) => {
                    return (
                      <p key={j} className="text-black text-left pb-4">
                        ✅ {f}
                      </p>
                    );
                  })}
                </div>
                <p className="text-gray-500 py-4">{p.billing}</p>
                <Link to="/contact">
                  <button className="btn rounded-full text-white p-2 pl-6 pr-6 my-5">
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Accordian />
    </div>
  );
};

export default Pricing;
