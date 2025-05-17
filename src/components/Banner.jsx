// src/components/Banner.jsx
import React from 'react';
import "../style/style.css";

import BannerLeft from './BannerLeft';
import BannerRight from './BannerRight';
import Navbar from './Navbar';

const Banner = () => {
  return (
    <div className="container-fluid position-relative ">
      <Navbar />
    
      <div className=" container d-flex mx-auto flex-wrap align-items-center fw-bold  p-5 row">
        <BannerLeft/>
        < BannerRight/>
      </div>
    </div>
  );
};

export default Banner;
