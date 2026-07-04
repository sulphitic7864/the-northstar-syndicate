
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import logo from "/MainLogo.jpeg";

function Footer() {
  const footerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const footerItem = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <motion.footer
        variants={footerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-black text-white border-t border-white/10"
      >
        <div className="max-w-[1600px] mx-auto px-[5%] py-20">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14">
            {/* Brand */}
            <motion.div variants={footerItem}>
              <img src={logo} alt="Logo of Ournsfas" className="md:w-40 w-20" />
              <h2 className="text-3xl font-light mt-5">
                <span className="font-semibold">The NorthStar Syndicate</span>
              </h2>

              <p className="text-gray-400 text-sm leading-7  max-w-sm">
                Building long-term value through innovation, strategic
                investments, and world-class execution.
              </p>
            </motion.div>

            {/* Company */}
            <motion.div variants={footerItem}>
              <h3 className="text-lg font-medium mb-8">
                Company
              </h3>

              <ul className="space-y-4">
                {[
                  { label: "Home", to: "/" },
                  { label: "About Us", to: "/about-us" },

                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}

            {/* Contact */}
            <motion.div variants={footerItem}>
              <h3 className="text-lg font-medium mb-8">
                Contact
              </h3>

              <div className="space-y-4 text-gray-400">
                <p>info@thenorthstarsyndicate.com.</p>
                {/* <p>+1 (212) 583-5000</p> */}
                {/* <p>New York, United States</p> */}
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-10">
                {[
                  // FaFacebookF,
                  FaInstagram,
                  FaLinkedinIn,
                  // FaXTwitter,
                ].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{
                      y: -3,
                    }}
                    className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white transition-all duration-300"
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.footer>

      {/* Bottom Bar */}
      <div className="bg-black border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-[5%] py-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} The NorthStar Syndicate. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;

