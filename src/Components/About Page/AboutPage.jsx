import Footer from "../Footer";
import AboutHero from "./AboutHero";
import AboutMe from "./AboutMe";
import OurTeam from "./OurTeam";
import SquareCards from "./SquareCards";

const AboutPage = () => {
  return (
    <div className="bg-purple-50">
      <AboutHero />
      <AboutMe />
      <SquareCards />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default AboutPage;
