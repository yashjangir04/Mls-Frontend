import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

import "swiper/css";

import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpeg";
import img3 from "../assets/images/3.jpeg";
import img4 from "../assets/images/3.jpeg";
import img5 from "../assets/images/3.jpeg";
import carouselBg from "../assets/images/carouselBg.jpg";

const images = [img1, img2, img3, img4, img5];

const GalleryCarousel = () => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full bg-[#060643cd] py-20 relative flex flex-col justify-center items-center gap-15 overflow-hidden mt-20 h-full">
      <img
        src={carouselBg}
        alt="carouselBg"
        className="w-full h-full object object-cover absolute z-[-1]"
      />
      <div className="galleryHeading relative w-fit h-10">
        <h2 className="text-white text-4xl mb-12 mont-bold">Gallery</h2>
        <div className="btns absolute right-[-150%] top-0 flex flex-row gap-3 items-center">
          <motion.button
            onClick={() => swiperRef.current.slidePrev()}
            className="z-10
             w-12 h-12 bg-white text-black
              items-center justify-center shadow-lg
             cursor-pointer hidden md:flex"
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <FaArrowLeft />
          </motion.button>

          {/* Custom Right Button */}
          <motion.button
            onClick={() => swiperRef.current.slideNext()}
            className="z-10
             w-12 h-12 bg-white text-black
              items-center justify-center shadow-lg
             cursor-pointer hidden md:flex"
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <FaArrowRight />
          </motion.button>
        </div>
      </div>

      <div className="w-full mx-auto px-[13%] relative">
        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop
          grabCursor
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="overflow-hidden shadow-xl bg-white">
                <img
                  src={img}
                  alt={`Gallery ${i}`}
                  className="w-full h-75 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GalleryCarousel;
