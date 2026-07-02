import { motion } from "framer-motion";

const stories = [
  {
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600",
    title: "Market Views: The Year of the IPO",
    category: "Market Views",
    date: "April 29, 2026",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600",
    title: "Introducing Tommy Fleetwood, our first Global Brand Ambassador",
    category: "Firm News",
    date: "March 31, 2026",
  },
  {
    image:
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=600",
    title: "Private Credit: Myth vs. Fact",
    category: "Market Views",
    date: "March 31, 2026",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    title: "Decoding the Next Phase of the Real Estate Cycle",
    category: "Market Views",
    date: "January 2, 2026",
  },
];

export default function FeaturedStories() {
  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-center gap-5 mb-12"
        >
          <span className="uppercase text-[11px] tracking-[2px] text-gray-700 font-medium">
            News & Insights
          </span>

          <div className="w-14 h-[1px] bg-black"></div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[34px] md:text-[48px] font-serif text-[#1b1b1b] mb-16"
        >
          Featured Stories
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden mb-5 bg-white">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-[280px] object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <h3 className="text-[26px] leading-[1.35] font-serif text-[#404040] mb-8 group-hover:text-black transition">
                {story.title}
              </h3>

              <div>
                <p className="text-[14px] font-medium text-[#3a3a3a] mb-1">
                  {story.category}
                </p>

                <p className="text-[14px] text-gray-500">
                  {story.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}