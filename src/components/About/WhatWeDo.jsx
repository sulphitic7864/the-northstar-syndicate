import { motion } from "framer-motion";

const items = [
  {
    title: "Build financial security",
    description:
      "We seek to deliver outstanding performance for institutional and individual investors by stewarding their capital with integrity and conviction.",
  },
  {
    title: "Create careers",
    description:
      "We offer an environment where exceptional talent can build lasting careers. To work at The NorthStar Syndicate means being at the forefront of emerging trends and setting the standards for our industry.",
  },
  {
    title: "Build strong businesses",
    description:
      "We equip businesses with an extensive range of tools and capabilities they need to grow.",
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

export default function WhatWeDo() {
  return (
    <section className="bg-black text-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-xs uppercase tracking-[3px] text-gray-300">
            Who We Serve
          </span>

          <div className="w-12 h-px bg-gray-400"></div>
        </motion.div>


        <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:text-3xl text-xl lg:text-5xl leading-9 font-light text-gray-200 "
            >
              At The NorthStar Syndicate, we deliver for Data Center operators by building edge data centers that power tomorrow's cloud computing, AI and LLM technology.
            </motion.h2>


        {/* Main Content */}
        {/* <div className="grid lg:grid-cols-2 gap-20">
          <div className="flex flex-col justify-between">
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mt-20 overflow-hidden"
            >
              <div className="w-full lg:max-w-[500px]">
                <img
                  src="/City_Building.jpg"
                
                  alt="Building"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col justify-center space-y-16">
            {items.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="md:text-3xl text-2xl font-light text-gray-100 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-8 max-w-md md:text-base text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}