import React from "react";
import img from "../assets/images/aboutImg.webp";

const About = () => {
  return (
    <div className="w-full min-h-screen px-[13%] flex flex-col justify-center items-center bg-gray-100 mt-24 md:mt-0 py-24 md:py-24 gap-10 md:gap-10">
      <div className="abtTop flex flex-col justify-center items-center">
        <h1 className="uppercase mont-semibold text-lg">About us</h1>
        <div className="line w-18 bg-blue-400 h-0.5 mt-2"></div>
      </div>

      <div className="abtLower w-full flex flex-col md:flex-row gap-10 h-[60%] overflow-hidden">
        <div className="abtLeft w-full md:w-1/2">
          <img
            src={img}
            alt="aboutImg"
            className="w-full h-full object-cover object-bottom"
          />
        </div>
        <div className="abtRight w-full md:w-1/2 roboto-regular flex flex-col justify-between gap-10">
          <h1>
            Maruti Logistics and is a family-owned logistics company that has
            been providing top-quality transportation and logistics services for
            over 5 years. Our team of experts is dedicated to delivering
            customized solutions that meet the needs of businesses of all sizes.
          </h1>
          <h1>
            We offer a range of logistics services, including trucking, air
            freight, ocean freight, and warehousing. Our state-of-the-art
            technology and equipment ensures that your cargo is handled with the
            utmost care and delivered on time, every time.
          </h1>
          <h1>
            At Maruti Logistics and, we are committed to providing exceptional
            customer service and building long-lasting relationships with our
            clients. We believe in transparency, honesty, and integrity in all
            our dealings, and we are dedicated to helping your business succeed.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
