import React from "react";
import logo from "../assets/images/logo_re.png";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { FiClock } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#2C2B76] z-10 px-10 md:px-0">
      
      {/* Decorative Shapes */}
      <div className="absolute -top-10 -left-24 w-40 h-20 bg-[#28275c] -rotate-45" />
      <div className="absolute -top-10 -right-24 w-40 h-20 bg-[#28275c] rotate-45" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="flex flex-col gap-14 items-start lg:flex-row lg:gap-24">
          
          {/* Logo */}
          <div className="w-full lg:w-auto flex justify-center md:justify-start">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
              <img
                src={logo}
                alt="Company Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Navigation */}
          <FooterSection title="Navigation">
            <FooterLink label="About Us" />
            <FooterLink label="Track" />
            <FooterLink label="Branches" />
            <FooterLink label="Contact" />
          </FooterSection>

          {/* Social */}
          <FooterSection title="Connect to us">
            <FooterLink label="WhatsApp" />
            <FooterLink label="Instagram" />
          </FooterSection>

          {/* Working Hours */}
          <div className="flex flex-col text-white w-full lg:max-w-sm text-left">
            <h1 className="uppercase mont-semibold text-lg">
              Working Hours
            </h1>
            <div className="w-12 h-0.5 bg-[#8f8dff] mt-2" />

            <p className="text-sm mt-6 text-gray-200 leading-relaxed">
              We work 7 days a week, including major holidays. Contact us for any
              information.
            </p>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3">
                <FiClock className="text-xl text-[#8f8dff]" />
                <span>8:00 AM - 7:00 PM</span>
              </div>

              <div className="flex items-center gap-3">
                <MdOutlinePhoneEnabled className="text-2xl text-[#8f8dff]" />
                <span>+91 97200 45682</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

/* Reusable Footer Section */
const FooterSection = ({ title, children }) => {
  return (
    <div className="flex flex-col text-white w-full lg:min-w-[180px] text-left">
      <h1 className="uppercase mont-semibold text-lg">
        {title}
      </h1>
      <div className="w-12 h-0.5 bg-[#8f8dff] mt-2" />
      <div className="mt-6 space-y-4">
        {children}
      </div>
    </div>
  );
};

/* Reusable Footer Link */
const FooterLink = ({ label }) => {
  return (
    <a
      href="#"
      className="flex items-center gap-2 mont-regular text-gray-200 hover:text-white transition"
    >
      <IoIosArrowForward className="text-[#8f8dff]" />
      <span className="underline underline-offset-4">
        {label}
      </span>
    </a>
  );
};

export default Footer;
