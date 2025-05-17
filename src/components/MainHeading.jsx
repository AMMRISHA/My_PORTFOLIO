import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

function MainHeading(){
 
        useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true      // only animate once
    });
  }, []);


  return (
    <div className="container">
      <div className="row">
        <div data-aos="fade-right" className="col-md-6 your-element-class">
          <h3>Left Section</h3>
          <p>This will fade in from the left (AOS fade-right).</p>
        </div>
        <div data-aos="fade-left" className="col-md-6 your-element-class">
          <h3>Right Section</h3>
          <p>This will fade in from the right (AOS fade-left).</p>
        </div>
      </div>
    </div>
  );
 
}

export default MainHeading;