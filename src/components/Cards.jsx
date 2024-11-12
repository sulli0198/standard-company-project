import React from 'react';

const Cards = ({ 
  title,
  subtitle,
  speed,
  drillDiameter,
  imageUrl 
}) => {
  return (
    <div className="w-72 rounded-lg overflow-hidden shadow-lg bg-white mx-auto my-4">
      {/* Image container with fixed height */}
      <div className="w-full h-48 bg-gray-200">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image Available
          </div>
        )}
      </div>
      
      {/* Content container */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          {title || "Super Steel Drill Machine S.S 10 RE"}
        </h2>
        
        {/* Subtitle */}
        <h3 className="text-md text-gray-700 mb-3">
          {subtitle || "Hammer Drill Machine"}
        </h3>
        
        {/* Specifications */}
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Speed: </span>
            {speed || "0-750 R/MIN"}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Drill Diameter: </span>
            {drillDiameter || "10MM"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;