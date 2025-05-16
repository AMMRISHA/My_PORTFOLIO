// src/components/Banner.jsx
import React from 'react';
import "../style/style.css";

import BannerLeft from './BannerLeft';
import BannerRight from './BannerRight';

const Banner = () => {
  return (
    <div className=" container d-flex mx-auto flex-wrap align-items-center fw-bold  p-5 row">
      <BannerLeft/>
      < BannerRight/>
    </div>
  );
};

export default Banner;
