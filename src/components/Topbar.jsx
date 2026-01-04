import React, { useState, useRef, useLayoutEffect } from "react";
import logo from "../assets/images/logo.png";
import { MdOutlinePhoneEnabled, MdOutlineEmail } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import gsap from "gsap";

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef(null);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  /* Page load animation */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(navRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  /* Mobile menu animation */
  useLayoutEffect(() => {
    if (!mobileMenuRef.current) return;

    if (menuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power3.inOut",
      });
    }
  }, [menuOpen]);

  return (
    <header ref={headerRef} className="w-[100vw] bg-white fixed top-0 md:relative z-50">
      
      {/* Top Info Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-6 flex justify-between items-center h-24">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-14 md:w-20" />
          <div className="leading-4">
            <h1 className="mont-bold text-lg text-gray-800">
              Maruti Logistics
            </h1>
            <p className="mont-semibold text-gray-400 text-sm">
              and Services
            </p>
          </div>
        </div>

        {/* Desktop Contact Info */}
        <div className="hidden lg:flex gap-8 roboto-semibold">
          <InfoBox
            icon={<MdOutlinePhoneEnabled />}
            title="Call us"
            value="+91 97200 45682"
          />
          <InfoBox
            icon={<MdOutlineEmail />}
            title="Send an email"
            value="maruti@gmail.com"
          />
          <InfoBox
            icon={<FiClock />}
            title="Opening time"
            value="Mon - Sun : 8AM - 7PM"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl text-[#2C2B76]"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Navbar */}
      <nav ref={navRef} className="bg-[#2C2B76] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16">

          {/* Desktop Nav */}
          <div className="hidden lg:flex h-16 items-center justify-between text-white roboto-regular">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About us</NavLink>
            <NavLink href="/client">Our customers</NavLink>
            <NavLink href="#">Branches</NavLink>
            <NavLink href="/login">Profile</NavLink>
            <NavLink
              href="https://shipment-track-app.vercel.app/"
              external
            >
              Track
            </NavLink>
          </div>

          {/* Mobile Nav */}
          <div
            ref={mobileMenuRef}
            className="lg:hidden flex flex-col gap-2 text-white roboto-regular overflow-hidden py-4"
            style={{ height: 0 }}
          >
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About us</NavLink>
            <NavLink href="/client">Our customers</NavLink>
            <NavLink href="#">Branches</NavLink>
            <NavLink href="/login">Profile</NavLink>
            <NavLink
              href="https://shipment-track-app.vercel.app/"
              external
            >
              Track
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

/* Info Box */
const InfoBox = ({ icon, title, value }) => (
  <div className="flex flex-col gap-1">
    <div className="flex items-center gap-2 text-gray-800">
      <span className="text-xl text-[#2C2D75]">{icon}</span>
      <span>{title}</span>
    </div>
    <span className="text-sm text-gray-400 roboto-thin">
      {value}
    </span>
  </div>
);

/* Nav Link */
const NavLink = ({ href, children, external }) => (
  <a
    href={href}
    target={external ? "_blank" : "_self"}
    rel={external ? "noopener noreferrer" : undefined}
    className="hover:text-blue-300 transition duration-300 py-2"
  >
    {children}
  </a>
);

export default Topbar;
