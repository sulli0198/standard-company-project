import React from 'react';
import contactBg from '../assets/images/contactbg.png';

const Contactpage = () => {
  return (
    <div 
      className='bg-cover bg-center h-screen flex items-center justify-center'
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className='bg-black bg-opacity-80 p-10 rounded-lg w-3/4 max-w-4xl'>
        <h2 className='text-white text-4xl  text-center mb-6 font-futura'>Contact Us</h2>
        <hr className='border-t border-white mb-8' />
        
        <div className='grid grid-cols-2 gap-8'>
          <div>
            <h3 className='text-white text-[1.5rem] mb-4 font-futura'>Visit Us</h3>
            <p className='text-white text-[1.26rem] mb-2 font-futura'>Wholesale store:</p>
            <p className='text-[1.26rem] font-bold mb-2'>
              <span className='text-red-900'>Standard</span>{' '}
              <span className='text-blue-800'>machine trading company</span>
            </p>
            <p className='text-white text-[1.26rem] mb-6 font-futura'>
              Basheer residency badria 3rd Cross<br />
              Behind D.C. Office, Near State Bank<br />
              Mangalore-575 001
            </p>
            <p className='text-white text-[1.26rem] mb-2 font-futura'>Retail store:</p>
            <p className='text-red-900 text-[1.26rem] font-bold mb-2'>Machine Mart</p>
            <p className='text-white text-[1.26rem] font-futura'>
              Opposite to Vishal Mart, Near State Bank<br />
              Mangalore-575 001
            </p>
          </div>
          <div>
            <h3 className='text-white text-[1.5rem]  mb-4 font-futura'>Call Us</h3>
            <p className='text-white text-[1.26rem] font-futura'>Mobile: +919742619891</p>
            <p className='text-white text-[1.26rem] font-futura'>Office: +919035006792</p>
            <p className='text-white text-[1.26rem] mb-12 font-futura'>Sales: +919035006793</p>
            <div className='border border-white rounded-lg p-3 mt-4'>
              <h3 className='text-white text-[1.5rem]  mb-4 font-futura'>Working Hours</h3>
              <p className='text-white text-[1.26rem] mb-2 font-futura'>Monday - Friday: 9:30 AM - 6:00 PM</p>
              <p className='text-white text-[1.26rem] font-futura'>Sunday: 9:30 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;