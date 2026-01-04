import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { useRef, useState } from "react";
import gsap from "gsap";

import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpeg";
import img3 from "../assets/images/3.jpeg";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";

const slides = [
  {
    image: img1,
    title: "Reliable transportation solutions",
    desc: "Ensuring safe, timely, and efficient movement of goods across regions.",
  },
  {
    image: img2,
    title: "Optimized logistics operations",
    desc: "Streamlined supply chains designed to reduce delays and improve efficiency.",
  },
  {
    image: img3,
    title: "Nationwide delivery network",
    desc: "Connecting businesses with dependable transport services across the country.",
  },
];

const Slider = () => {
  const sliderComponent = useRef(null);
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  const animateText = () => {
    gsap.fromTo(
      ".slide-text",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  };

  return (
    <div
      ref={sliderComponent}
      className="sliderComp relative w-full h-[45vh] md:h-[90vh] bg-black overflow-hidden z-1 mt-30 md:mt-0"
    >
      {/* Custom Arrows */}
      <motion.button
        onClick={() => swiperRef.current.slidePrev()}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 
                    bg-white text-black w-12 h-12 
                    items-center justify-center text-xl cursor-pointer hidden md:flex"
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <FaArrowLeft />
      </motion.button>

      <motion.button
        onClick={() => swiperRef.current.slideNext()}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 
                    bg-white text-black w-12 h-12 
                    items-center justify-center text-xl cursor-pointer hidden md:flex"
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <FaArrowRight />
      </motion.button>

      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        grabCursor
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setActive(swiper.realIndex);
          animateText();
        }}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-6">
                <div className="slide-text text-center text-white max-w-2xl flex flex-col">
                  <h1 className="text-xl md:text-5xl font-bold mb-2 md:mb-4 text-nowrap self-end md:self-center">
                    {slide.title}
                  </h1>
                  <p className="text-sm md:text-xl opacity-90 w-full md:w-130 text-right self-end">{slide.desc}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => swiperRef.current.slideToLoop(i)}
            className={`h-1 w-10 transition-all duration-300
              ${active === i ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
