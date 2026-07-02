import { motion } from "framer-motion";

export default function EarningsSection() {
  return (
    <section className="bg-[#f4f4f4] min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-20"
        >
          <span className="uppercase tracking-[3px] text-[13px] text-black">
            Earnings
          </span>

          <div className="w-14 h-[2px] bg-black"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[34px] md:text-[48px] leading-tight font-serif text-black">
              The NorthStar Syndicate Reports First-
              <br />
              Quarter 2026 Earnings
            </h2>
          </motion.div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="overflow-hidden">
              <img
                src="/ocean.jpg"
                alt="Ocean"
                className="w-[280px] h-[380px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </motion.div>

          {/* Right Links */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <a
              href="#"
              className="block text-lg underline underline-offset-4 hover:translate-x-2 transition"
            >
              View Full Press Release
            </a>

            <a
              href="#"
              className="block text-lg underline underline-offset-4 hover:translate-x-2 transition"
            >
              View Supplemental
            </a>

            <a
              href="#"
              className="block text-lg underline underline-offset-4 hover:translate-x-2 transition"
            >
              Financial Data: PDF | Excel
            </a>

            <a
              href="#"
              className="block text-lg underline underline-offset-4 hover:translate-x-2 transition"
            >
              Listen to Webcast
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}