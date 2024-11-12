import React, { useState } from 'react';
import Cards from '../components/Cards';
import cordless from '../assets/images/cordelessdrill.png';
import impact from '../assets/images/impactdrill.png';
import rotary from '../assets/images/rotarydrill.png';
import hammer from '../assets/images/Hammerdrill.png';

const Products = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = ['All', 'Power Tools', 'Construction Tools', 'Agricultural Tools'];

  const products = [
    { 
      title: 'Drill Machine A', 
      subtitle: 'Hammer Drill', 
      speed: '0-750 R/MIN', 
      drillDiameter: '10MM', 
      imageUrl: hammer,
      category: 'Construction Tools',
      description: 'Professional-grade hammer drill perfect for concrete and masonry work.',
      features: [
        'Variable speed control',
        'Ergonomic handle design',
        'Heavy-duty chuck',
        'Built-in LED light'
      ],
      specifications: {
        weight: '2.5 kg',
        power: '800W',
        voltage: '220V',
        warranty: '2 years'
      },
      price: '$299.99'
    },
    { 
      title: 'Drill Machine B', 
      subtitle: 'Impact Drill', 
      speed: '0-1000 R/MIN', 
      drillDiameter: '12MM', 
      imageUrl: impact,
      category: 'Construction Tools',
      description: 'Powerful impact drill for heavy-duty applications.',
      features: [
        'Powerful impact mechanism',
        'Adjustable clutch settings',
        'Robust metal gear housing',
        'Reversible operation'
      ],
      specifications: {
        weight: '3 kg',
        power: '900W',
        voltage: '220V',
        warranty: '3 years'
      },
      price: '$399.99'
    },
    {
      title: 'Drill Machine C',
      subtitle: 'Rotary Drill',
      speed: '0-800 R/MIN',
      drillDiameter: '15MM',
      imageUrl: rotary,
      category: 'Construction Tools',
      description: 'Versatile rotary drill for a variety of drilling tasks.',
      features: [
        'Powerful motor',
        'Keyless chuck',
        'Vibration control',
        'Soft-grip handle'
      ],
      specifications: {
        weight: '2.8 kg',
        power: '850W',
        voltage: '220V',
        warranty: '2 years'
      },
      price: '$349.99'
    },
    {
      title: 'Drill Machine D',
      subtitle: 'Cordless Drill',
      speed: '0-500 R/MIN',
      drillDiameter: '8MM',
      imageUrl: cordless,
      category: 'Construction Tools',
      description: 'Compact and lightweight cordless drill for convenience.',
      features: [
        'Cordless design',
        'Two-speed gear box',
        'LED work light',
        'Includes battery and charger'
      ],
      specifications: {
        weight: '1.5 kg',
        power: '18V',
        voltage: '220V',
        warranty: '1 year'
      },
      price: '$199.99'
    }
  ];

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const ProductModal = () => {
    if (!selectedProduct) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold">{selectedProduct.title}</h2>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.title}
                  className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <p className="text-2xl font-bold text-blue-600">
                  {selectedProduct.price}
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Description</h3>
                  <p className="text-gray-600">{selectedProduct.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Features</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Specifications</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="font-medium capitalize">{key}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Technical Details</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium">Speed:</span>
                      <span className="text-gray-600 ml-2">{selectedProduct.speed}</span>
                    </div>
                    <div>
                      <span className="font-medium">Diameter:</span>
                      <span className="text-gray-600 ml-2">{selectedProduct.drillDiameter}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t p-6 flex justify-end space-x-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    const renderCards = (productsToRender) => (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {productsToRender.map((product, index) => (
          <div 
            key={index} 
            onClick={() => handleCardClick(product)}
            className="cursor-pointer transform transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <Cards
              title={product.title}
              subtitle={product.subtitle}
              speed={product.speed}
              drillDiameter={product.drillDiameter}
              imageUrl={product.imageUrl}
            />
          </div>
        ))}
      </div>
    );

    switch (activeTab) {
      case 'All':
        return renderCards(products);
      case 'Construction Tools':
        const constructionTools = products.filter(
          product => product.category === 'Construction Tools'
        );
        return renderCards(constructionTools);
      case 'Power Tools':
        return <div>Content for Power Tools</div>;
      case 'Agricultural Tools':
        return <div>Content for Agricultural Tools</div>;
      default:
        return null;
    }
  };

  return (
    <div className="p-0">
      {/* Center-aligned search bar */}
      <div className="flex flex-col items-center mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="py-2 px-8 rounded bg-white text-black"
        />
      </div>

      {/* Modified tab container structure */}
      <div className="relative mb-4">
        {/* Fixed blue container */}
        <div className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] h-[100px] bg-blue-800 -mt-4"></div>
        
        {/* Scrollable tabs container */}
        <div className="overflow-x-auto">
          <div className="flex justify-start md:justify-center space-x-4 mb-8 mt-6 px-4 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Render content based on active tab */}
      {renderContent()}

      {/* Add modal */}
      {isModalOpen && <ProductModal />}
    </div>
  );
};

export default Products;