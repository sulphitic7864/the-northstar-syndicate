import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";


const AuthPage = ({ isOpen, onClose, defaultMode = "login" }) => {
  const [mode, setMode] = useState(defaultMode);
  useEffect(() => {
    if (isOpen) {
      setMode(defaultMode);
    }
  }, [isOpen, defaultMode]);

  if (!isOpen) return null;

  const isSignup = mode === "signup";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-[999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 40 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl mx-4 h-[500px] md:h-[560px] bg-white rounded-xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
          >
            <button
              onClick={onClose}
              className="absolute  top-2  right-2 bg-black text-white rounded-full p-2 shadow z-10"
            >
              <HiX size={22} />
            </button>

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden md:flex relative overflow-hidden flex-col justify-center items-center text-white"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/loginVideo.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-black/80" />

              <div className="relative z-10 text-center p-10">
                <h2 className="text-3xl font-bold mb-3 montserrat">
                 Join Us Today!
                </h2>
                <p className="text-sm opacity-90 max-w-xs mx-auto">
                 Start your journey with us today.
                </p>
              </div>
            </motion.div>

            <div className="p-8 lg:p-16 h-full flex items-center">
              <div className="max-w-lg">
                <h2 className="text-4xl font-light text-black mb-10">
                  Contact Us
                </h2>

                <div className="space-y-10">
                  <div>
                    <p className="text-gray-600 leading-8">
                      For office-specific contact information, please visit our
                      offices page.
                    </p>

                    <p className="mt-4 text-black font-medium">
                      Switchboard: +1 (212) 583-5000
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-black mb-3">
                      Media Contacts
                    </h3>

                    <p className="text-gray-600 leading-8">
                      For press inquiries, contact{" "}
                      <a
                        href="mailto:info@thenorthstarsyndicate.com"
                        className="text-black underline underline-offset-4"
                      >
                        info@thenorthstarsyndicate.com
                      </a>
                      .
                    </p>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-3 text-black text-lg"
                    >
                      <span className="border-b border-black">
                        View Recent Press Releases
                      </span>

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthPage;
