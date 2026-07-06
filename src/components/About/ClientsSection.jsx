import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";

const clientsData = [
  {
    title: "Institutional Investors",
    content:
      "We partner with pension funds, sovereign wealth funds, insurance companies and other institutions seeking long-term value creation.",
  },
  {
    title: "Financial Advisors & Individual Investors",
    content:
      "We provide access to alternative investment opportunities through a variety of solutions tailored to individual investors.",
  },
  {
    title: "Family Offices, Endowments & Foundations",
    content:
      "We work closely with family offices and nonprofit institutions to support their investment objectives.",
  },
  {
    title: "Insurers",
    content:
      "We help insurers optimize capital efficiency and generate long-term returns through customized investment strategies.",
  },
];

export default function ClientsSection() {
  const [active, setActive] = useState(0);

  const toggleAccordion = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-[#f5f5f5] min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Label */}
        <div className="flex items-center gap-5 mb-16">
          <span className=" text-base uppercase tracking-[2px] text-black">
            Who Does The NorthStar Syndicate Serve
          </span>

          <div className="w-12 h-px bg-black"></div>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-serif text-[#232323] mb-16"
        >
          Our Clients
        </motion.h2>

        {/* Accordion */}
        <div className="border-t border-black">
          {clientsData.map((item, index) => (
            <div
              key={index}
              className="border-b border-[#cfcfcf]"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-8 flex items-center justify-between text-left"
              >
                <span className="text-[22px] font-serif text-[#2a2a2a]">
                  {item.title}
                </span>

                <motion.div
                  animate={{ rotate: active === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoChevronDown size={18} />
                </motion.div>
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 max-w-3xl text-gray-600 leading-8">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        {/* <div className="mt-16 text-sm font-normal text-gray-600 leading-6">
          <p className="font-medium mb-4">
            <span className="text-black text-base">Note:</span> All figures as of March 31, 2026, unless otherwise indicated.
          </p>

          <p>1. As of December 31, 2025</p>
          <p>
            2. Gain figure represents gains (realized and unrealized) LTD as of
            March 31, 2026.
          </p>
          <p>
            3. Reflects assets under management from the private wealth channel
            across The NorthStar Syndicate funds.
          </p>
        </div> */}
      </div>
    </section>
  );
}