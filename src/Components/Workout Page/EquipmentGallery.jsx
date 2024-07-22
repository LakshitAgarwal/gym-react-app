import { EQUIPMENTS_GALLERY } from "../../utils/constants";
import { TiTick } from "react-icons/ti";

const EquipmentGallery = () => {
  return (
    <div className="mt-24">
      <div>
        <h1 className="text-center text-4xl md:text-6xl text-purple-950 w-fit mx-auto arsenal-sc-regular">
          Equipments Gallery
        </h1>
      </div>
      <div className="flex flex-col md:flex-row w-[80%] gap-6 justify-around mx-auto mt-12">
        {EQUIPMENTS_GALLERY.map((eq, i) => {
          return (
            <div key={i}>
              <h1 className="dm-sans-bold text-xl mb-5 pb-1 border-b-4 border-b-purple-300">
                {eq.heading}
              </h1>
              <ul>
                {eq.list.map((i) => {
                  return (
                    <li key={i} className="mb-1 flex items-center dm-sans-font">
                      <TiTick className="text-lg mr-2 text-purple-200 rounded-full bg-purple-950" />{" "}
                      {i}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EquipmentGallery;
