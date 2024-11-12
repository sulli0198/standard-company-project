import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ourproductssection from '../assets/images/ourproductssection.png';
import powerToolBackground from '../assets/images/powertoolbg.png';
import powerToolImage from '../assets/images/powertoolpic.png';
import constructionToolBackground from '../assets/images/constructiontoolbg.png';
import constructionToolImage from '../assets/images/constructiontoolpic.png';
import agriculturalToolBackground from '../assets/images/agriculturaltoolbg.png';
import agriculturalToolImage from '../assets/images/agriculturaltoolpic.png';

const OurProductsSection = () => {
  const [backgroundImage, setBackgroundImage] = useState(ourproductssection);
  const [sideImage, setSideImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const images = [
      ourproductssection,
      powerToolBackground,
      powerToolImage,
      constructionToolBackground,
      constructionToolImage,
      agriculturalToolBackground,
      agriculturalToolImage
    ];

    images.forEach(imageUrl => {
      const img = new Image();
      img.src = imageUrl;
    });
  }, []);

  const handleMouseEnter = (section) => {
    setIsHovered(true);
    switch (section) {
      case 'powerTools':
        setBackgroundImage(powerToolBackground);
        setSideImage(powerToolImage);
        break;
      case 'constructionTools':
        setBackgroundImage(constructionToolBackground);
        setSideImage(constructionToolImage);
        break;
      case 'agriculturalTools':
        setBackgroundImage(agriculturalToolBackground);
        setSideImage(agriculturalToolImage);
        break;
      default:
        break;
    }
  };

  const handleMouseLeave = () => {
    setBackgroundImage(ourproductssection);
    setSideImage(null);
    // setIsHovered(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className="w-full h-[550px] rounded-3xl bg-cover bg-center shadow-lg transition-all duration-500 ease-in-out"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div
          className={`w-full h-full rounded-3xl flex items-center p-8 justify-between transition-all duration-500 ease-in-out ${
            isHovered ? '' : 'bg-black bg-opacity-50'
          }`}
        >
          <div className="w-2/5 ml-3 overflow-hidden flex items-center justify-center h-full">
            {sideImage ? (
              <img
                src={sideImage}
                alt="Hover Image"
                className="w-full h-auto object-contain transition-opacity duration-500 ease-in-out opacity-100"
              />
            ) : (
              <h2
                className="text-7xl font-bold text-white font-trendSans transition-opacity duration-500 ease-in-out opacity-100"
                style={{
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
                }}
              >
                Our Products
              </h2>
            )}
          </div>
          <div className="w-1/3 flex flex-col">
            <div
              className="p-4 rounded-lg transition-colors duration-300 hover:bg-white hover:bg-opacity-10"
              onMouseEnter={() => handleMouseEnter('powerTools')}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-xl  font-futura mb-2 text-blue-800">Power Tools</h3>
              <p className="text-white font-futura text-[1.2rem]">
                Our selection of power tools includes drills, saws, grinders, nail guns, etc.
              </p>
            </div>
            <div
              className="p-4 rounded-lg transition-colors duration-300 hover:bg-white hover:bg-opacity-10"
              onMouseEnter={() => handleMouseEnter('constructionTools')}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-xl  font-futura mb-2 text-blue-800">Construction tools</h3>
              <p className="text-white font-futura text-[1.2rem]">
                Explore our range of construction tools such as Chainsaws, Construction drills,
                rotary hammers, etc. Durable and precise tools.
              </p>
            </div>
            <div
              className="p-4 rounded-lg transition-colors duration-300 hover:bg-white hover:bg-opacity-10"
              onMouseEnter={() => handleMouseEnter('agriculturalTools')}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-xl  font-futura mb-2 text-blue-800">Agricultural tools</h3>
              <p className="text-white font-futura text-[1.2rem]">
                Discover our variety of agriculture tools, including brush cutters, sprayers,
                washers, etc.
              </p>
            </div>
            <Link
              to="/products"
              className="mt-4 py-2 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-800 text-white w-fit ml-3 hover:opacity-[0.9] transition-opacity duration-300 font-futura text-[1.27rem]"
            >
              Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProductsSection;