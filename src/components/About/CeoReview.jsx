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

export default function CeoReview() {
  return (
    <section className="bg-black text-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
       
        <div className="flex lg:flex-row justify-between items-center md:gap-28 gap-10 flex-col ">
         
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="  lg:w-[30%] w-full"
          >
            <img
              src="/ceo.jpg"
              alt="Building"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          <div className="lg:w-[70%] w-full">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:text-2xl text-lg   md:!leading-[40px] leading-7 font-light text-gray-200 "
            >
              “The firm’s achievements are only possible because of our most
              valuable asset: our people. I often say that there are no patents
              in finance. Our success instead relies on the talent of our teams
              around the world, knit together by a shared mission to be the best
              in the world at what we do on behalf of our investors.” At
              The NorthStar Syndicate, we deliver for investors by building businesses that
              power tomorrow's economy.
            </motion.h2>
            <div className="flex items-end justify-end flex-col mt-10">
                <h2 className="text-white capitalize font-medium text-xl">Stephen A. Schwarzman</h2>
                <p className="text-gray-200 text-base mt-1 capitalize font-normal">Chairman, CEO & Co-Founder</p>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
