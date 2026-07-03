import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiPlay } from "react-icons/fi";

import "swiper/css";

// const slides = [
//   {
//     id: 1,
//     video: "https://www.w3schools.com/html/mov_bbb.mp4",
//     title: "Celebrating 40 Years at The NorthStar Syndicate",
//     description:
//       "The NorthStar Syndicate Chairman, CEO & Co-Founder Steve Schwarzman and President & COO Jon Gray interview each other on The NorthStar Syndicate's past, present and future.",
//   },
//   {
//     id: 2,
//     video: "https://www.w3schools.com/html/movie.mp4",
//     title: "Investing For The Future",
//     description:
//       "Discover how The NorthStar Syndicate continues to invest in transformative opportunities around the world.",
//   },
//   {
//     id: 3,
//     video: "https://www.w3schools.com/html/mov_bbb.mp4",
//     title: "Creating Long-Term Value",
//     description:
//       "Our focus remains on delivering value through innovation, scale and operational excellence.",
//   },
// ];
const slides = [
  {
    id: 1,
    video:
      "https://players.brightcove.net/5843213364001/R9lfdXjDx_default/index.html?videoId=6382749368112",
    title: "Celebrating 40 Years at The NorthStar Syndicate",
    description:
      "The NorthStar Syndicate Chairman, CEO & Co-Founder Steve Schwarzman and President & COO Jon Gray interview each other on The NorthStar Syndicate's past, present and future.",
  },
  {
    id: 2,
    video:
      "https://players.brightcove.net/5843213364001/R9lfdXjDx_default/index.html?videoId=6374391871112",
    title: "Investing For The Future",
    description:
      "Discover how The NorthStar Syndicate continues to invest in transformative opportunities around the world.",
  },
  {
    id: 3,
    video:
       "https://players.brightcove.net/5843213364001/R9lfdXjDx_default/index.html?videoId=6382749368112",
    title: "Creating Long-Term Value",
    description:
      "Our focus remains on delivering value through innovation, scale and operational excellence.",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const swiperRef = useRef(null);
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div className="p-[5%]">
      <div className="flex items-center justify-between lg:flex-row flex-col lg:gap-0 gap-5">
        <h2 className="md:text-4xl text-2xl font-medium text-white capitalize">
          <span className="font-bold">Build</span> with <br /> &nbsp; &nbsp;
          The NorthStar Syndicate
        </h2>
        <p className="md:text-xl text-base font-normal text-gray-400">
          The NorthStar Syndicate is the world’s #1 alternative asset manager{" "}
        </p>
      </div>
      <div className="bg-black text-white min-h-screen mt-10">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          speed={1000}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          className="hero-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div>
                {/* VIDEO */}
                <div className="relative h-[55vh] md:h-[85vh] overflow-hidden w-full">
                  
                  <div className="relative h-[85vh] md:h-[98vh] w-full ">
                    <iframe
                      src={slide.video}
                      className="w-full h-full"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>

                  {/* Top Right Play Button */}
                  {/* <button className="absolute right-10 bottom-10 w-20 h-20 rounded-full bg-white text-black flex items-center justify-center">
                    <FiPlay size={28} />
                  </button> */}
                </div>

                {/* CONTENT */}
                <div className="grid lg:grid-cols-2 gap-16  py-14 bg-black">
                  {/* LEFT */}
                  <div>
                    <AnimatePresence mode="wait">
                      <motion.h2
                        key={slide.title}
                        initial={{
                          opacity: 0,
                          y: 40,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -40,
                        }}
                        transition={{
                          duration: 0.6,
                        }}
                        className="text-2xl md:text-5xl font-light leading-tight max-w-2xl"
                      >
                        {slide.title}
                      </motion.h2>
                    </AnimatePresence>

                    {/* NAVIGATION */}
                    <div className="flex items-center mt-16">
                      {/* PREV */}
                      <button className="custom-prev md:w-14 w-10 md:h-14 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
                        <FiArrowLeft size={20} />
                      </button>

                      {/* DOTS */}
                      <div className="flex items-center justify-center gap-4 w-[120px] mx-8">
                        {slides.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => swiperRef.current?.slideTo(index)}
                            className={`rounded-full transition-all duration-300 ${
                              activeIndex === index
                                ? "w-3 h-3 bg-white"
                                : "w-3 h-3 bg-white/30"
                            }`}
                          />
                        ))}
                      </div>

                      {/* NEXT */}
                      <button className="custom-next md:w-14 w-10 md:h-14 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
                        <FiArrowRight size={20} />
                      </button>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={slide.description}
                        initial={{
                          opacity: 0,
                          y: 40,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -40,
                        }}
                        transition={{
                          duration: 0.6,
                        }}
                      >
                        <p className="text-lg text-gray-300 leading-8 max-w-xl">
                          {slide.description}
                        </p>
                      </motion.div>
                    </AnimatePresence>

                    {/* <button className="flex items-center gap-5 mt-12 group">
                    <span className="text-xl">
                      Watch Now
                    </span>

                    <span className="w-14 h-14 border border-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition">
                      <FiPlay />
                    </span>
                  </button> */}
                    <button
                      onClick={() => {
                        setSelectedVideo(slide.video);
                        setIsModalOpen(true);
                      }}
                      className="flex items-center gap-5 mt-12 group"
                    >
                      <span className="text-xl">Watch Now</span>

                      <span className="w-14 h-14 border border-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition">
                        <FiPlay />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute -top-14 right-0 text-white text-4xl"
                >
                  ×
                </button>

                {/* Video */}
                {/* <video controls autoPlay className="w-full rounded-lg">
                  <source src={selectedVideo} type="video/mp4" />
                </video> */}
                <iframe
                  src={selectedVideo}
                  className="w-full h-[70vh] rounded-lg"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
