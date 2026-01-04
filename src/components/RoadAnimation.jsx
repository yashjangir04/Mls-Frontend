import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import truck from "../assets/images/truck.png";

const RoadAnimation = () => {
  const truckRef = useRef(null);
  const roadWrapperRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        truckRef.current,
        { x: -120 },
        {
          x: window.innerWidth + 300,
          duration: 10,
          repeat: -1,
          ease: "linear",
        }
      );

      gsap.fromTo(
        roadWrapperRef.current,
        { x: 0 },
        {
          x: "-100vw",
          duration: 6,
          repeat: -1,
          ease: "linear",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="absolute bottom-0 left-0 w-full h-28 pointer-events-none">
      {/* Road */}
      <div className="absolute bottom-0 w-full h-16 bg-gray-800 overflow-hidden">
        <div ref={roadWrapperRef} className="flex w-max">
          <div className="road-strip" />
          <div className="road-strip" />
        </div>
      </div>

      {/* Truck */}
      <div ref={truckRef} className="absolute bottom-6 left-[-120px]">
        <img
          src={truck}
          alt="truck"
          className="w-28 rotate-y-180 select-none"
        />
      </div>
    </div>
  );
};

export default RoadAnimation;
