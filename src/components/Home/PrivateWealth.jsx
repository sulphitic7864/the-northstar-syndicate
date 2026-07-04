import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const funds = [
  {
    title: "The NorthStar Syndicate Real Estate Income Trust (BREIT)",
    link: "#",
  },
  {
    title: "The NorthStar Syndicate Private Credit Fund (BCRED)",
    link: "#",
  },
  {
    title: "The NorthStar Syndicate Private Multi-Asset Credit and Income Fund (BMACX)",
    link: "#",
  },
];

export default function PrivateWealth() {
  const items = Array(10).fill("Build wealth with The NorthStar Syndicate");
  return (
    <section className="bg-black text-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-6"
        >
          {/* <span className="uppercase tracking-[3px] text-sm">
            Private Wealth
          </span> 

          <div className="w-16 h-[1px] bg-white" />*/}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 mt-16 lg:mt-24">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2
                className="
                  text-2xl
                  md:text-4xl
                  lg:text-5xl
                  font-light
               
                  max-w-xl
                "
              >
                Colocations and Hyperscalers
              </h2>

              <p
                className="
                  md:mt-12 mt-5
                  md:text-base text-sm md:pl-10
                  leading-[2]
                  text-white/90
                  max-w-md
                "
              >
                The buildings The NorthStar Syndicate create are for the Hyperscalers and Colocation Companies. We have data centers available for you.
              </p>
              {/* Learn More */}
              <button className="group flex items-center gap-6 md:mt-16 mt-10">
                <span className="md:text-3xl text-xl font-light">
                  Learn More
                </span>

                <span
                  className="
                  md:w-14 w-10
                  md:h-14 h-10
                  rounded-full
                  border
                  border-white
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  group-hover:bg-white
                  group-hover:text-black
                "
                >
                  <FiArrowRight size={20} />
                </span>
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="
              bg-[#080b14]
              
            "
          >
            <img
              src="/about-datacenter-new.png"
              alt="Modern enterprise data center supporting cloud computing and AI infrastructure"
              className="w-full max-w-xl h-[500px] object-cover rounded-lg shadow-lg"
            />
            {/* {funds.map((fund, index) => (
              <div key={index}>
                <div className="group flex items-start justify-between gap-6 py-8">
                  <h3
                    className="
    text-sm
    md:text-xl
    font-light
    leading-[1.6]
    max-w-lg
    relative
    inline-block
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[1px]
    after:w-0
    after:bg-white
    after:transition-all
    after:duration-300
    group-hover:after:w-full
  "
                  >
                    {fund.title}
                  </h3>

                  <button
                    className="
          flex-shrink-0
          w-12
          h-12
          rounded-full
          border
          border-white
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:bg-white
          hover:text-black
        "
                  >
                    <FiArrowRight size={18} />
                  </button>
                </div>

                {index !== funds.length - 1 && (
                  <div className="h-px bg-white/20" />
                )}
              </div>
            ))} */}
          </motion.div>
        </div>
      </div>

      <section className="bg-black py-20 overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={50}
          loop
          allowTouchMove={false}
          speed={20000} // 20 seconds
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          className="marquee-swiper"
        >
          {Array(12)
            .fill("Build wealth with The NorthStar Syndicate")
            .map((text, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <h1 className="text-[50px] md:text-[100px] font-serif text-white whitespace-nowrap">
                  {text}
                </h1>
              </SwiperSlide>
            ))}
        </Swiper>

        {/* <p className="text-white text-sm mt-10 md:ml-10 ml-2">
        Investing involves risks, including loss of capital
      </p> */}
      </section>


    </section>
  );
}
