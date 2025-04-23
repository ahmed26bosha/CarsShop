import React, { useState } from 'react';


const ShopBoxCar = () => {
  const [activeTab, setActiveTab] = useState('New Cars For Sale');

  const categories = [
    'New Cars For Sale',
    'Used Cars For Sale',
    'Browse By Type',
    'Browse By Brand'
  ];

  const brandsData = {
    'New Cars For Sale': [
      'Ford Cars', 'Honda Cars', 'Hyundai Cars', 'Infiniti Cars', 'Jaguar Cars', 'Jeep Cars'
    ],
    'Used Cars For Sale': [
      'Chrysler Cars', 'Citroen Cars', 'Cupra Cars', 'Dacia Cars', 'DS Cars', 'Fiat Cars'
    ],
    'Browse By Type': [
      'Land Rover Cars', 'Lexus Cars', 'Mercedes-Benz Cars', 'Mazda Cars', 'MG Cars', 'Kia Cars'
    ],
    'Browse By Brand': [
      'Abarth Cars', 'Alfa Romeo Cars', 'Audi Cars', 'Bentley Cars', 'BMW Cars', 'Chevrolet Cars',
      'Mini Cars', 'Mitsubishi Cars', 'Nissan Cars', 'Peugeot Cars', 'Porsche Cars', 'Renault Cars'
    ]
  };

  const [showAll, setShowAll] = useState(false);
  const visibleBrands = showAll ? brandsData[activeTab] : brandsData[activeTab].slice(0, 6);

  return (
    <div className="shop-boxcar">
      <h1>Shop BoxCar Your Way</h1>
      
      <div className="tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`tab ${activeTab === category ? 'active' : ''}`}
            onClick={() => {
              setActiveTab(category);
              setShowAll(false);
            }}
          >
            {category}
          </button>
        ))}
      </div>
  
      
      <div className="brands-grid">
        {visibleBrands.map((brand) => (
          <div key={brand} className="brand-card">
            {brand}
            
          </div>
        ))}
      </div>
      
      {brandsData[activeTab].length > 6 && (
        <button className="view-more" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'View More'}
        </button>
      )}
    </div>
  );
};

export default ShopBoxCar;