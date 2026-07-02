import React from "react";
import { motion } from "framer-motion";

function AboutFirm() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-20">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-light text-black"
        >
          About the Firm
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-[45%] text-sm md:text-base text-gray-600 leading-relaxed"
        >
          The NorthStar Syndicate is the world’s largest alternative asset manager, with more than
          $1.3 trillion in AUM. We serve institutional and individual investors by
          building strong businesses that deliver lasting value. Our scale – with ~12,500
          real estate assets and 250 portfolio companies – enables us to invest in dynamic
          sectors positioned for long-term growth.
        </motion.p>
      </div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 w-full overflow-hidden"
      >
        <img
          src="/aboutimg.jpg"   // put image in public folder
          alt="About Firm"
          className="w-full h-[400px] md:h-[550px] object-cover"
        />
      </motion.div>
    </section>
  );
}

export default AboutFirm;