import React from "react";
import HeroAbout from "../About/HeroAbout";
import WhatWeDo from "../About/WhatWeDo";
import ClientsSection from "../About/ClientsSection";
import CeoReview from "../About/CeoReview";
import OurValues from "../About/OurValues";

function AboutUs() {
  return (
    <div className="mt-20">
      <HeroAbout />
      <WhatWeDo/>
      {/* <ClientsSection/> */}
      {/* <CeoReview/> */}
      <OurValues/>
    </div>
  );
}

export default AboutUs;
