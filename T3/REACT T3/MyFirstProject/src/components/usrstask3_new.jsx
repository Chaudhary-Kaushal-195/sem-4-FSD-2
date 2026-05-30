// Task-3 (USA)
// Create react app to filter images based on category while clicking on respective buttons.
// Categories – All, Samsung, Vivo and Oneplus.
// By clicking on "All" it will display mobiles of all brands.
// By clicking on specific brand it will display mobiles of respective brand.

import { useState } from "react";
import './usrstask3.css';

export default function Usrstask3() {
  // Mobile data with categories
  const mobileData = [
    { id: 1, name: 'Samsung Galaxy S21', category: 'Samsung', image: 'https://via.placeholder.com/250x300?text=Samsung+S21' },
    { id: 2, name: 'Samsung Galaxy A50', category: 'Samsung', image: 'https://via.placeholder.com/250x300?text=Samsung+A50' },
    { id: 3, name: 'Samsung Galaxy M32', category: 'Samsung', image: 'https://via.placeholder.com/250x300?text=Samsung+M32' },
    { id: 4, name: 'Vivo V21', category: 'Vivo', image: 'https://via.placeholder.com/250x300?text=Vivo+V21' },
    { id: 5, name: 'Vivo Y20', category: 'Vivo', image: 'https://via.placeholder.com/250x300?text=Vivo+Y20' },
    { id: 6, name: 'Vivo X70', category: 'Vivo', image: 'https://via.placeholder.com/250x300?text=Vivo+X70' },
    { id: 7, name: 'OnePlus 9 Pro', category: 'Oneplus', image: 'https://via.placeholder.com/250x300?text=OnePlus+9+Pro' },
    { id: 8, name: 'OnePlus 8T', category: 'Oneplus', image: 'https://via.placeholder.com/250x300?text=OnePlus+8T' },
    { id: 9, name: 'OnePlus Nord', category: 'Oneplus', image: 'https://via.placeholder.com/250x300?text=OnePlus+Nord' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Samsung', 'Vivo', 'Oneplus'];

  // Filter mobiles based on selected category
  const filteredMobiles = selectedCategory === 'All' 
    ? mobileData 
    : mobileData.filter(mobile => mobile.category === selectedCategory);

  return (
    <div className="usrstask3Container">
      <div className="usrstask3Content">
        <h1 className="usrstask3Title">Mobile Phone Gallery</h1>
        
        {/* Category Buttons */}
        <div className="usrstask3CategoryButtons">
          {categories.map((category) => (
            <button
              key={category}
              className={`usrstask3CategoryBtn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile Gallery Grid */}
        <div className="usrstask3Gallery">
          {filteredMobiles.length > 0 ? (
            filteredMobiles.map((mobile) => (
              <div key={mobile.id} className="usrstask3Card">
                <div className="usrstask3CardImage">
                  <img src={mobile.image} alt={mobile.name} />
                </div>
                <h3 className="usrstask3CardName">{mobile.name}</h3>
                <p className="usrstask3CardCategory">{mobile.category}</p>
              </div>
            ))
          ) : (
            <p className="usrstask3NoResults">No mobiles found in this category</p>
          )}
        </div>
      </div>
    </div>
  );
}
