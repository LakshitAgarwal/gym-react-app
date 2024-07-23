import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { OUR_TEAM_INFO } from "../../utils/constants";
import { useState } from "react";
import { motion } from "framer-motion";

const OurTeam = () => {
  const [bioDiv, setBioDiv] = useState(null);

  const handleBio = (i) => {
    setBioDiv(i);
  };

  const closeBio = () => {
    setBioDiv(null);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="my-24 px-4 md:px-0 relative">
      <div className="text-center mt-20 sm:mt-0">
        <h1 className="text-3xl font-extrabold text-purple-800 arsenal-sc-bold">
          Our Team
        </h1>
        <p className="mx-auto w-[90%] sm:w-2/3 md:w-1/2 lg:w-1/3 text-base sm:text-lg py-4 pb-12 text-gray-500">
          Meet our dedicated fitness family — a team committed to your success
          and well-being.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center gap-8">
        {OUR_TEAM_INFO.map((team, i) => (
          <div
            key={i}
            onClick={() => handleBio(i)}
            className="bg-white instructors-info cursor-pointer rounded-lg shadow-2xl p-6 flex flex-col items-center text-center w-[90%] mx-auto md:mx-0 md:w-[25%] min-h-[47vh]"
          >
            <img
              src={team.IMG_URL}
              alt={`${team.NAME}'s picture`}
              className="w-44 h-44 rounded-full object-cover mb-4"
            />
            <h1 className="text-2xl font-semibold text-gray-800">
              {team.NAME}
            </h1>
            <p className="text-gray-600 text-sm my-4">{team.Designation}</p>
            <div className="flex justify-center space-x-6 text-3xl">
              <a
                href="https://x.com/LakshitAgarwal7"
                target="_blank"
                className="text-black transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/lakshit-agarwal-6082b9216/"
                target="_blank"
                className="text-blue-500 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/lakshit.7811/"
                target="_blank"
                className="text-pink-500 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        ))}
      </div>
      {bioDiv !== null ? (
        <>
          <div
            onClick={closeBio}
            className="fixed inset-0 bg-black opacity-30 z-10"
          ></div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex items-center justify-center z-20"
            onClick={closeBio}
          >
            <div
              className="md:h-[80vh] md:w-[80vw] w-[90vw] h-[90vh] bg-white p-8 rounded-lg relative overflow-y-auto"
              onClick={stopPropagation}
            >
              <button
                onClick={closeBio}
                className="absolute top-4 right-4 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center"
              >
                &times;
              </button>
              <div className="flex flex-col md:flex-row">
                <img
                  src={OUR_TEAM_INFO[bioDiv].IMG_URL}
                  alt={`${OUR_TEAM_INFO[bioDiv].NAME}'s picture`}
                  className="w-full md:w-1/3 h-auto md:h-1/3 rounded-2xl mt-8"
                />
                <div className="md:w-[60%] mt-4 md:mt-0 md:ml-8">
                  <h1 className="md:text-3xl md:mt-10 text-2xl font-semibold text-gray-800">
                    {OUR_TEAM_INFO[bioDiv].NAME}
                  </h1>
                  <p className="text-gray-600 text-sm my-1">
                    {OUR_TEAM_INFO[bioDiv].Designation}
                  </p>
                  <p className="my-4">{OUR_TEAM_INFO[bioDiv].bio}</p>
                  <hr />
                  <p className="py-8">Phone: +91 9511517845</p>
                  <hr />
                  <p className="py-8">Email: lakshitcollege@gmail.com</p>
                  <hr />
                  <div className="flex my-8 space-x-6 text-3xl">
                    <a
                      href="https://x.com/LakshitAgarwal7"
                      target="_blank"
                      className="hover:text-black transition-colors"
                    >
                      <FaXTwitter />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/lakshit-agarwal-6082b9216/"
                      target="_blank"
                      className="text-blue-500 transition-colors"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://www.instagram.com/lakshit.7811/"
                      target="_blank"
                      className="text-pink-500 transition-colors"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </div>
  );
};

export default OurTeam;
