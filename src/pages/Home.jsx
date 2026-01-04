import React from "react";
import Slider from '../components/Slider.jsx'
import Features1 from '../components/Features1.jsx'
import GalleryCarousel from '../components/GalleryCarousel.jsx'
import Clients from './Clients.jsx'

const Home = () => {
  return (
    <div>
      <Slider />
      <Features1 />
      <GalleryCarousel />
      <Clients />
    </div>
  );
};

export default Home;
