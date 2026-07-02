import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";

export default function NewsletterSection() {
  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Pakistan",
    "Australia",
    "Germany",
    "France",
    "UAE",
    "Saudi Arabia",
    "India",
    "China",
    "Japan",
  ];

  const [selectedCountry, setSelectedCountry] = useState("");
  const [openCountry, setOpenCountry] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpenCountry(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <section className="bg-black text-white py-24 lg:py-32 overflow-visible">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 md:mb-12 mb-5">
              <span className="uppercase text-base tracking-[2px] text-gray-400">
                Stay Up-To-Date
              </span>

              <div className="w-8 h-[1px] bg-gray-400"></div>
            </div>

            <h2 className="text-2xl md:text-5xl leading-tight font-serif max-w-xl">
              Sign up for our latest insights and firm announcements.
            </h2>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:max-w-md  ml-auto w-full"
          >
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email Address *"
                className="w-full bg-[#0b0f18] border border-[#1f2633] px-4 py-4 text-sm outline-none focus:border-white transition"
              />

              <input
                type="text"
                placeholder="First Name *"
                className="w-full bg-[#0b0f18] border border-[#1f2633] px-4 py-4 text-sm outline-none focus:border-white transition"
              />

              <input
                type="text"
                placeholder="Last Name *"
                className="w-full bg-[#0b0f18] border border-[#1f2633] px-4 py-4 text-sm outline-none focus:border-white transition"
              />

              <input
                type="text"
                placeholder="Company"
                className="w-full bg-[#0b0f18] border border-[#1f2633] px-4 py-4 text-sm outline-none focus:border-white transition"
              />

              <input
                type="text"
                placeholder="Job Title"
                className="w-full bg-[#0b0f18] border border-[#1f2633] px-4 py-4 text-sm outline-none focus:border-white transition"
              />

              {/* CUSTOM COUNTRY DROPDOWN */}
              <div ref={dropdownRef} className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setOpenCountry(!openCountry)
                  }
                  className="w-full bg-[#0b0f18] border border-[#1f2633] px-4 py-4 flex items-center justify-between text-sm"
                >
                  <span
                    className={
                      selectedCountry
                        ? "text-white"
                        : "text-gray-400"
                    }
                  >
                    {selectedCountry || "Country *"}
                  </span>

                  <motion.div
                    animate={{
                      rotate: openCountry ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openCountry && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="
                        absolute
                        left-0
                        top-full
                        mt-1
                        w-full
                        bg-[#0b0f18]
                        border
                        border-[#1f2633]
                        z-[9999]
                        shadow-xl
                        max-h-60
                        overflow-y-auto
                      "
                    >
                      {countries.map((country) => (
                        <button
                          key={country}
                          type="button"
                          onClick={() => {
                            setSelectedCountry(country);
                            setOpenCountry(false);
                          }}
                          className="
                            w-full
                            text-left
                            px-4
                            py-3
                            text-sm
                            hover:bg-white
                            hover:text-black
                            transition-all
                          "
                        >
                          {country}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CHECKBOX */}
            <div className="flex items-start gap-3 mt-8">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 accent-white"
              />

              <p className="text-[11px] text-gray-400 leading-relaxed">
                By submitting this request, you consent to
                receive email from The NorthStar Syndicate. For information
                on our privacy practices see our Privacy Policy.
              </p>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="group flex items-center gap-4 mt-10"
            >
              <span className="text-sm">Submit</span>

              <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black">
                <FiArrowRight size={18} />
              </div>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}