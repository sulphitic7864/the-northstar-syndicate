import { motion } from "framer-motion";
import { useState } from "react";
import { FiPlay } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const items = [
  {
    title: "Deliver for Our Clients",
    description:
      "We posses a relentless drive to deliver for our Colocation and Hyperscale clients to make sure there is no latency issues in our Data Centers.",
  },
  {
    title: "Outperformance",
    description:
      "Our goal is to outperform the market by delivering competitive rent to our clients.",
  },
  {
    title: "Optimal Quality of Client Servicing",
    description:
      "Every client of ours will feel noticed in their concerns and we will respond as fast as we can to ensure quality is not compromised.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
    },
  }),
};

export default function OurValues() {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <section className="bg-white text-black min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-xs uppercase tracking-[3px] text-black">
            OUR VALUES
          </span>

          <div className="w-12 h-px bg-black"></div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:text-3xl text-xl lg:text-5xl leading-9 font-light "
        >
          Our global employees are deeply committed to the values that define
          our character and culture.
        </motion.h2>
        <div className="flex items-center justify-center">
            <NavLink to="/about-us" className="md:text-xl text-sm text-gray-600">
          <button className="group flex items-center justify-center gap-5 md:mt-16 mt-5">
              Learn More About Our People

            <span className="w-12 h-12 rounded-full border border-black flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:text-white">
              →
            </span>
          </button>
            </NavLink>
        </div>

        {/* Right Side */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16  mt-20">
          {items.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="md:text-2xl text-xl font-light  mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-8  md:text-base text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <div className="relative aspect-video overflow-hidden bg-black">
            {!playVideo ? (
              <>
                {/* Poster */}
                <img
                  src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/5843213364001/f223edb5-bbfd-49ae-81e0-0539e5be5a8b/52e459a6-4293-4160-a5df-7ac0746f4b33/1280x720/match/image.jpg"
                  alt="Our Values"
                  className="w-full h-full object-cover"
                />

                {/* Play Button */}
                <button
                  onClick={() => setPlayVideo(true)}
                  className="absolute bottom-8 right-8 w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300"
                >
                  <FiPlay size={28} /> 
                </button>
              </>
            ) : (
              <video
                src="/vid_4.mp4"
                controls
                autoPlay
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full h-full"
                title="Our Values Video"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
