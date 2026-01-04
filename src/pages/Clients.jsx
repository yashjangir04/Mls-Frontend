import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import img1 from "../assets/images/Client/1.png";
import img2 from "../assets/images/Client/2.png";
import img3 from "../assets/images/Client/3.png";
import img4 from "../assets/images/Client/4.png";
import img5 from "../assets/images/Client/5.png";
import img6 from "../assets/images/Client/6.png";
import img7 from "../assets/images/Client/7.png";
import img8 from "../assets/images/Client/8.png";
import img9 from "../assets/images/Client/9.png";
import img10 from "../assets/images/Client/10.png";

const Clients = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const items = track.children;

    let totalWidth = 0;

    // Calculate total width of one set
    Array.from(items).forEach((item) => {
      totalWidth += item.offsetWidth + 40; // gap-10 = 40px
    });

    // GSAP infinite loop
    gsap.to(track, {
      x: `-${totalWidth / 2}`,
      duration: 60,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const clients = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10];

  return (
    <div
      ref={containerRef}
      id="mainClient"
      className="w-full bg-white py-30 overflow-hidden flex flex-col justify-center mt-24 md:mt-0"
    >
      {/* Heading */}
      <div className="w-full flex flex-col justify-center items-center mb-20">
        <h1 className="uppercase mont-semibold text-xl md:text-3xl">
          Clients that trust us
        </h1>
        <div className="w-30 bg-blue-400 h-0.5 mt-2"></div>
      </div>

      {/* Slider */}
      <div className="client overflow-hidden w-[75%] ml-[13%]">
        <div
          ref={trackRef}
          className="flex gap-10 w-max"
        >
          {/* First set */}
          {clients.map((item, index) => (
            <div
              key={`a-${index}`}
              className="w-50 h-40 flex justify-center items-center shrink-0"
            >
              <img src={item} alt="client-logos" className="object-cover w-full" />
            </div>
          ))}

          {/* Duplicate set */}
          {clients.map((item, index) => (
            <div
              key={`b-${index}`}
              className="w-50 h-40 flex justify-center items-center shrink-0"
            >
              <img src={item} alt="client-logos" className="object-cover w-full" />
            </div>
          ))}
          {/* First set */}
          {clients.map((item, index) => (
            <div
              key={`a-${index}`}
              className="w-50 h-40 flex justify-center items-center shrink-0"
            >
              <img src={item} alt="client-logos" className="object-cover w-full" />
            </div>
          ))}

          {/* Duplicate set */}
          {clients.map((item, index) => (
            <div
              key={`b-${index}`}
              className="w-50 h-40 flex justify-center items-center shrink-0"
            >
              <img src={item} alt="client-logos" className="object-cover w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients ;
