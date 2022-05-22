import { Hero } from "../../components";
import HeroImage from "../../assets/images/hero.svg";

export const Homepage = () => {
  return (
    <div className="flex-1">
      <Hero
        heroImage={HeroImage}
        titleFirstName="Subtle"
        titleSecondName="Notes"
        desc1="Meet your modern"
        desc2="Note Taking app"
        desc3="Manage your daily tasks and workflow in a modern way and boost your efficiency without any efforts."
      />
    </div>
  );
};
