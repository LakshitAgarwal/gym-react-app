import Pricing from "../Pricing";
import EquipmentGallery from "./EquipmentGallery";
import InquirySection from "./InquirySection";
import WorkoutCards from "./WorkoutCards";
import WorkoutHero from "./WorkoutHero";

const WorkoutPage = () => {
  return (
    <div className="bg-purple-50">
      <WorkoutHero />
      <WorkoutCards />
      <InquirySection />
      <EquipmentGallery />
      <Pricing />
    </div>
  );
};

export default WorkoutPage;
