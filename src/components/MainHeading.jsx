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
    <div>
      <div data-aos="fade-right" className="your-element-class">
        This will slide in from the left when you scroll!
      </div>
    </div>
  );
 
}

export default MainHeading;