import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import homepic from '../assets/images/homepic.png';
import '../styles/fonts.css';
import Line from '../components/Line';
import OurProductsSection from '../components/OurProductsSection';
import Aboutpage from './Aboutpage';
import Contactpage from './Contactpage';
import { Element, scroller } from 'react-scroll';

const Homepage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      // Wait for the Homepage component to fully mount before scrolling
      setTimeout(() => {
        scroller.scrollTo(`${location.state.scrollTo}-section`, {
          duration: 500,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
      }, 200); // Delay increased to 200ms to allow for smoother transitions
    }
  }, [location]);
  

  return (
    <div>
      <div className="h-[100dvh] w-full bg-cover bg-center flex items-center justify-center" 
           style={{ backgroundImage: `url(${homepic})` }}>
        <div className="w-full h-full flex flex-col justify-center mt-32 px-[4%]">
          <div className="flex flex-col gap-7 ">
            <div className='flex flex-col space-y-[-3rem]'>
              <h1 className="text-[7rem] font-spartan text-red-900">Standard</h1>
              <h2 className="text-[3.5rem] font-spartan text-blue-800">
                Machine Trading Company <span className="text-white font-futura text-[1.28rem]">Machines & Spare Parts</span>
              </h2>
            </div>

            <div className="mt-[-1rem]">
              <p className="text-[1.28rem] text-white font-futura">
                Drip & Sprinkler Irrigation, Brass Fittings, Spray Guns, Trimmer Rope, PU pipes, Brass Nozzles, Compressors, Welding Machine, HTP & Portable Sprayers, Brush Cutters, Chain saw & more available at the store.
              </p>
            </div>
            <button className="bg-transparent text-white py-2 px-4 rounded border border-white hover:bg-white hover:text-black transition duration-200 text-[1.27rem] font-futura w-fit">
              Mobile: +919742619891
            </button>
            {isMobile && <Line />}
          </div>
        </div>
      </div>
      <div className='h-[90dvh] items-center justify-center flex'>
        <OurProductsSection />
      </div>
      <Element id="about-section">
        <Aboutpage />
      </Element>
      <Element id="contact-section">
        <Contactpage />
      </Element>
    </div>
  );
};

export default Homepage;
