import React from "react";
import HeroHome from "../Home/HeroHome";
import AboutFirm from "../Home/AboutFirm";
import PrivateWealth from "../Home/PrivateWealth";
import EarningsSection from "../Home/EarningsSection";
import FeaturedStories from "../Home/FeaturedStories";
import NewsletterSection from "../Home/NewsletterSection";
import HeroAbout from "../About/HeroAbout";
import WhatWeDo from "../About/WhatWeDo";
import ClientsSection from "../About/ClientsSection";
import CeoReview from "../About/CeoReview";
import OurValues from "../About/OurValues";

function Home() {
  return (
    <div className="mt-20 bg-black ">
      <HeroHome />
      <AboutFirm/>
      <PrivateWealth/>
      <HeroAbout/>
      <WhatWeDo/>
      <CeoReview/>
      <OurValues/>
      <ClientsSection/>
      {/* <EarningsSection/> */}
      {/* <FeaturedStories/> */}
      {/* <NewsletterSection/> */}
    </div>
  );
}

export default Home;

// jb main khta hu ilahi mery ahwal dekh...
// hukm hota he phle apny amal dekh...

// apni mrzi or rb k mrxi m frk ko gham khty h
