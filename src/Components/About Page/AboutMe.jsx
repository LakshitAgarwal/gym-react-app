import { TiTick } from "react-icons/ti";
import { ABOUT_ME_CONTENT, ABOUT_ME_IMG } from "../../utils/constants";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="md:my-24 mt-24 mb-12 px-4 w-full md:px-0">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
        <img
          className="w-full md:w-[45%] rounded-3xl shadow-2xl shadow-purple-400"
          src={ABOUT_ME_IMG}
          alt="About Me"
        />

        <div className="w-[90%] mx-auto md:w-1/3 space-y-8 ">
          {ABOUT_ME_CONTENT.map((content, i) => {
            return (
              <div key={i} className=" md:space-y-4">
                <h3 className="md:text-xl font-semibold mt-3 text-gray-600">
                  {content.intro}
                </h3>
                <h1 className="text-2xl md:text-4xl font-bold mt-1 md:mt-0 mb-2 md:mb-0 text-purple-800">
                  {content.heading}
                </h1>
                <p className="text-gray-600 md:text-lg mb-3 md:mb-0 leading-relaxed">
                  {content.description}
                </p>
                <ul className="list-inside space-y-2">
                  {content.facilities.map((f, i) => {
                    return (
                      <li key={i} className="text-gray-600 flex items-center">
                        <TiTick className="text-lg mr-2 text-purple-200 rounded-full bg-purple-900" />{" "}
                        {f}
                      </li>
                    );
                  })}
                </ul>
                <Link to="/contact">
                  <button className="services-btn rounded-lg text-white md:tracking-wider mx-auto arsenal-sc-regular p-2 md:p-3 md:pl-4 md:pr-4 mt-6 mb-4">
                    Contact Now &rarr;
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
