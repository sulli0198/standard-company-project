import React, { useState } from 'react';

const Aboutdesign = (props) => {

  const [showParagraph, setShowParagraph] = useState(false);

  const toggleView = () => {
    setShowParagraph(!showParagraph);
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center flex-col mt-5">
      {!showParagraph ? (
        <>
          <div className='flex flex-col text-center'>
            <h1 className='text-white font-spartan text-[6rem] -mb-5'>{props.title1}</h1>
            <h2 className='text-white font font-spartan text-[3rem]'>{props.title2}</h2>
          </div>
          <div className="relative">
            <div className="flex items-center">
              <div className="flex flex-col items-center mr-5">
                <div className="font-horizon text-8xl text-transparent outline-slash translate-y-6 pr-1">/</div>
                <div className="font-horizon text-8xl text-transparent outline-slash -translate-y-5">/</div>
              </div>
              <div className="mx-8 flex flex-col justify-center w-64">
                <p className="text-white text-5xl -mb-1 font-cursive text-left">Our</p>
                <p className="font-horizon text-white text-[1.85rem] -mb-1 text-center">{props.title}</p>
                <p className="text-white text-5xl font-cursive text-right">store..</p>
              </div>
              <div className="flex flex-col items-center ml-5">
                <div className="font-horizon text-8xl text-transparent outline-slash translate-y-6 pl-1">\</div>
                <div className="font-horizon text-8xl text-transparent outline-slash -translate-y-5">\</div>
              </div>
            </div>
          </div>
          <button onClick={toggleView} className="mt-2 text-[1.27rem] font-futura bg-transparent border-white border-2 rounded-sm text-white font-bold py-1 px-16 shadow-lg transform transition duration-100 hover:scale-105 hover:bg-white hover:text-black">
            View
          </button>
        </>
      ) : (
        <div className="bg-black bg-opacity-70 p-6 rounded-lg max-w-2xl">
          <p className="text-white text-[1.7rem] font-futura mb-4">
            {props.paragraph}
          </p>
          <div className="w-full h-px bg-white mb-4"></div>
          <button onClick={toggleView} className="text-[1.27rem] font-futura bg-transparent border-white border-2 rounded-sm text-white font-bold py-1 px-16 shadow-lg transform transition duration-100 hover:scale-105 hover:bg-white hover:text-black">
            Back
          </button>
        </div>
      )}
      <style jsx>{`
        .outline-slash {
          -webkit-text-stroke: 5px white;
        }
        .font-cursive {
          font-family: 'Brush Script MT', cursive;
        }
      `}</style>
    </div>
  );
}

export default Aboutdesign;