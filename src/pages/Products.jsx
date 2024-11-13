import React, { useState } from 'react';
import Cards from '../components/Cards';
import cordless from '../assets/images/cordelessdrill.png';
import impact from '../assets/images/impactdrill.png';
import rotary from '../assets/images/rotarydrill.png';
import hammer from '../assets/images/Hammerdrill.png';
import chainsaw1 from '../assets/images/chainsaw1.png';
import chainsaw2 from '../assets/images/chainsaw2.png';
import chainsaw3 from '../assets/images/chainsaw3.png';
import chainsaw4 from '../assets/images/chainsaw4.png';
import washer1 from '../assets/images/washer1.png';
import washer2 from '../assets/images/washer2.png';
import washer3 from '../assets/images/washer3.png';
import washer4 from '../assets/images/washer4.png';

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
    },
    { 
      title: 'Chainsaw Pro X1', 
      subtitle: 'Professional Chainsaw', 
      speed: '12000 RPM', 
      drillDiameter: '16"',
      imageUrl: chainsaw1,
      category: 'Power Tools',
      description: 'Professional-grade chainsaw with superior cutting performance.',
      features: [
        'Anti-vibration system',
        'Quick chain adjustment',
        'Automatic chain oiling',
        'Safety chain brake'
      ],
      specifications: {
        weight: '5.5 kg',
        power: '2000W',
        barLength: '16 inches',
        warranty: '2 years'
      },
      price: '$449.99'
    },
    { 
      title: 'Chainsaw Elite 2000', 
      subtitle: 'Heavy-Duty Chainsaw', 
      speed: '13500 RPM', 
      drillDiameter: '18"',
      imageUrl: chainsaw2,
      category: 'Power Tools',
      description: 'Heavy-duty chainsaw designed for demanding cutting tasks.',
      features: [
        'Tool-less chain tensioning',
        'Ergonomic wrap-around handle',
        'Low kickback chain',
        'Electronic soft start'
      ],
      specifications: {
        weight: '6.2 kg',
        power: '2200W',
        barLength: '18 inches',
        warranty: '3 years'
      },
      price: '$599.99'
    },
    {
      title: 'Chainsaw Lite X3',
      subtitle: 'Compact Chainsaw',
      speed: '11000 RPM',
      drillDiameter: '14"',
      imageUrl: chainsaw3,
      category: 'Power Tools',
      description: 'Lightweight and compact chainsaw perfect for home use.',
      features: [
        'Lightweight design',
        'Easy start system',
        'Tool-free access',
        'Transparent oil level window'
      ],
      specifications: {
        weight: '4.8 kg',
        power: '1800W',
        barLength: '14 inches',
        warranty: '2 years'
      },
      price: '$349.99'
    },
    {
      title: 'Chainsaw Master 4000',
      subtitle: 'Professional Chainsaw',
      speed: '14000 RPM',
      drillDiameter: '20"',
      imageUrl: chainsaw4,
      category: 'Power Tools',
      description: 'High-performance chainsaw for professional logging and tree services.',
      features: [
        'Professional-grade engine',
        'Advanced air filtration',
        'Heated handles',
        'Magnesium chassis'
      ],
      specifications: {
        weight: '6.8 kg',
        power: '2400W',
        barLength: '20 inches',
        warranty: '3 years'
      },
      price: '$799.99'
    },
    {
      title: 'Power Washer Pro',
      subtitle: 'High-Pressure Washer',
      speed: '2800 PSI',
      drillDiameter: '15°',
      imageUrl: washer1,
      category: 'Agricultural Tools',
      description: 'Professional high-pressure washer for agricultural cleaning applications.',
      features: [
        'Adjustable pressure control',
        'Multiple nozzle attachments',
        'Heavy-duty brass pump',
        'Thermal protection system'
      ],
      specifications: {
        weight: '23 kg',
        power: '2200W',
        waterFlow: '6.0 L/min',
        warranty: '2 years'
      },
      price: '$599.99'
    },
    {
      title: 'Washer Elite X2',
      subtitle: 'Industrial Washer',
      speed: '3200 PSI',
      drillDiameter: '25°',
      imageUrl: washer2,
      category: 'Agricultural Tools',
      description: 'Heavy-duty industrial washer with extended reach and superior cleaning power.',
      features: [
        'Extended reach wand',
        'Quick-connect spray tips',
        'Steel-braided hose',
        'Onboard detergent tank'
      ],
      specifications: {
        weight: '28 kg',
        power: '2500W',
        waterFlow: '7.5 L/min',
        warranty: '3 years'
      },
      price: '$749.99'
    },
    {
      title: 'Washer Pro Max',
      subtitle: 'Commercial Washer',
      speed: '3500 PSI',
      drillDiameter: '30°',
      imageUrl: washer3,
      category: 'Agricultural Tools',
      description: 'Commercial-grade pressure washer with advanced cleaning capabilities.',
      features: [
        'Professional spray gun',
        'Dual detergent tanks',
        'All-terrain wheels',
        'Digital pressure control'
      ],
      specifications: {
        weight: '32 kg',
        power: '2800W',
        waterFlow: '8.0 L/min',
        warranty: '3 years'
      },
      price: '$899.99'
    },
    {
      title: 'Washer Ultra Force',
      subtitle: 'Heavy-Duty Industrial Washer',
      speed: '4000 PSI',
      drillDiameter: '40°',
      imageUrl: washer4,
      category: 'Agricultural Tools',
      description: 'Ultra-powerful industrial washer for the most demanding cleaning tasks.',
      features: [
        'Triple piston pump',
        'Stainless steel frame',
        'Professional hose reel',
        'Smart pressure sensing'
      ],
      specifications: {
        weight: '35 kg',
        power: '3000W',
        waterFlow: '9.5 L/min',
        warranty: '4 years'
      },
      price: '$1,199.99'
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
        const powerTools = products.filter(
          product => product.category === 'Power Tools'
        );
        return renderCards(powerTools);
      case 'Agricultural Tools':
        const agriculturalTools = products.filter(
          product => product.category === 'Agricultural Tools'
        );
        return renderCards(agriculturalTools);
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