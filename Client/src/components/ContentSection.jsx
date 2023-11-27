import About from "./About";
import ActiveCampaigns from "./ActiveCampaigns";
import Statistics from "./Statistics";

const ContentSection = () => {
  return (
    <div className="w-100 h-auto sm:h-screen mb-3 sm:mb-0 bg-primary-white px-4 py-2">
      <About />
      <Statistics />
      <ActiveCampaigns />
    </div>
  );
};

export default ContentSection;
