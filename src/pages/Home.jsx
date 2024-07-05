import ReferBenefits from "../components/benefits/ReferBenefits";
import Refer from "../components/refer/Refer";
import ReferHero from "../components/refer/ReferHero";
import Ads from "./Ads";
import FAQs from "./FAQs";

function Home() {
  return (
    <div className='App'>
      <ReferHero />
      <Refer />
      <ReferBenefits />
      <FAQs />
      <Ads />
    </div>
  );
}

export default Home;
