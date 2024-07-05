import React from "react";
import Refer from "./components/refer/Refer";
import ReferHero from "./components/refer/ReferHero";
import ReferBenefits from "./components/benefits/ReferBenefits";

function App() {
  return (
    <div className='App'>
      <ReferHero />
      <Refer />
      <ReferBenefits />
    </div>
  );
}

export default App;
