import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TESTIMONIALS } from "../utils/constants";
import { useRef } from "react";

const Carousal = () => {
  let sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="bg-purple-50 py-10">
      <div className="text-center">
        <h1 className="text-3xl mt-10 font-extrabold text-purple-800 arsenal-sc-bold">
          TESTIMONIALS
        </h1>
        <h1 className="text-5xl font-bold pt-3">What Clients Say</h1>
        <p className="mx-auto w-1/3 text-lg py-4 pb-6 text-gray-500">
          Our Trainers know what is best for your body and they work to the best
          of your needs.
        </p>
      </div>
      <div className="w-5/6 mx-auto">
        <div className="mt-10">
          <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
            {TESTIMONIALS.map((testis, index) => {
              return (
                <div
                  key={index}
                  className="sticky-button p-8 text-white rounded-lg mb-6 min-h-[300px]"
                >
                  <img
                    src={testis.img}
                    alt="img"
                    className="w-16 h-16 rounded-full object-cover mb-4 mx-auto"
                  />
                  <h1 className="text-xl font-semibold text-center mb-4">
                    {testis.name}
                  </h1>
                  <p className=" leading-relaxed text-center">
                    {testis.Review}
                  </p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
