import React from 'react';
import productsData from '../lib/data/products.json'; 
import './listing.css'; 

const ProductList = () => {
  const { products } = productsData;

  return (
    <div className="product-list">

      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search (Model #, Serial#...)"
          className="search-input"
        />
        <select className="location-filter" > 
          <option value="">All Locations</option>
          <option value="Location 1">Location 1</option>
          <option value="Location 2">Location 2</option>
        </select>
      </div>

      {/* Display Products */}
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img className="product-image" src={product.images[0]} alt={`Image of ${product.modelNumber}`} />
          <div className="product-details">
            <p><strong>S/N:</strong> {product.serialNumber}</p>
            <p><strong>M/N:</strong> {product.modelNumber}</p>
            <p><strong>C/N:</strong> {product.cnNumber}</p>
            <p><strong>Location:</strong> {product.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;