import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Topbar2 = () => {
  useEffect(() => {
    const sliderComp = document.querySelector(".sliderComp");
    const bar = document.querySelector(".navbar2");
    const barOriginal = document.querySelectorAll(".navbar");
    const barOriginala = document.querySelectorAll(".navbar a");
    gsap.fromTo(
      barOriginal,
      {
        left: "-100%",
      },
      {
        left: "13%"
      }
    );

    gsap.fromTo(
      barOriginala,
      {
        y: 200,
        opacity: 0,
      },
      {
        duration: 0.8,
        y: 0,
        opacity: 1,
      }
    );

    gsap.fromTo(
      bar,
      {
        y: -200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.35,
        scrollTrigger: {
          trigger: sliderComp,
          start: "bottom 50%",
          end: "bottom 50%",
          toggleActions: "play none reverse none",
        },
      }
    );
  }, []);

  return (
    <div className="hidden md:block w-full">
      <div className="navbar2 fixed top-10 left-[13%] h-18 w-[75%] bg-white backdrop-blur-2xl flex flex-row justify-between items-center px-20 roboto-regular text-black z-1000 border border-gray-200">
        <Link to="/" className="hover:text-blue-300 duration-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-300 duration-300">
          About us
        </Link>
        <Link to="/client" className="hover:text-blue-300 duration-300">
          Our customers
        </Link>
        <Link to="#" className="hover:text-blue-300 duration-300">
          Branches
        </Link>
        <Link to="/login" className="hover:text-blue-300 duration-300">
          Profile
        </Link>
        <Link
          target="_blank"
          to="https://shipment-track-app.vercel.app/"
          className="hover:text-blue-300 duration-300"
        >
          Track
        </Link>
      </div>
    </div>
  );
};

export default Topbar2;
