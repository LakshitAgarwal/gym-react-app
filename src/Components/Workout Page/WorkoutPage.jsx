import InquirySection from "./InquirySection";
import WorkoutCards from "./WorkoutCards";
import WorkoutHero from "./WorkoutHero";

const WorkoutPage = () => {
  return (
    <div className="bg-purple-50">
      <WorkoutHero />
      <WorkoutCards />
      <InquirySection />
    </div>
  );
};

export default WorkoutPage;
