import { ABOUT_BANNER_URL } from "../../utils/constants";

const AboutHero = () => {
  return (
    <div className="relative md:-mt-5 overflow-hidden bg-black">
      <img
        src={ABOUT_BANNER_URL}
        alt="About Us Banner"
        className="w-full object-cover md:object-center md:h-auto h-[50vh] object-[88%] opacity-50 md:opacity-100"
      />
      <div className="absolute inset-0 flex items-center justify-center md:justify-start md:ml-40">
        <h1 className="text-purple-50 text-5xl md:text-7xl arsenal-sc-bold text-center">
          About Us
        </h1>
      </div>
    </div>
  );
};

export default AboutHero;
