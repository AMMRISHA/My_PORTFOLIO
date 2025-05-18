// src/components/Banner.jsx
import React from 'react';
import "../style/style.css";

import BannerLeft from './BannerLeft';
import BannerRight from './BannerRight';


const Banner = () => {
  return (
    <div className="container-fluid position-relative w-100 ">
    
      <div className=" banner-resp container d-flex mx-auto flex-wrap align-items-center fw-bold  p-5 row">
        <BannerLeft/>
        < BannerRight/>
      </div>
    </div>
  );
};

export default Banner;
