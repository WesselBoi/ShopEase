import React, { useState, useEffect } from "react";
import products from "../products.js";
import { Link } from "react-router-dom";
import Rating from "../components/Rating.jsx";

function Home() {
  return (
    <div className="min-h-screen py-12 px-4" style={{ backgroundColor: '#7965C1' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6" style={{ color: '#E3D095' }}>
            Our Premium Collection
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#FFFFFF' }}>
            Discover our amazing collection of products carefully selected just
            for you. Quality meets affordability in every item.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              to={`/product/${product._id}`}
              key={product._id}
              className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: '#0E2148' }}></div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 line-clamp-2 transition-colors duration-200 group-hover:opacity-80" style={{ color: '#0E2148' }}>
                  {product.name}
                </h2>
                <p className="mb-4 text-sm line-clamp-3 leading-relaxed" style={{ color: '#483AA0' }}>
                  {product.desc}
                </p>
                
                {/* Rating Component */}
                <div className="mb-4">
                  <Rating rating={product.rating} numReviews={product.numReviews} />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold" style={{ color: '#7965C1' }}>
                    ${product.price}
                  </span>
                  <button 
                    className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
                    style={{ backgroundColor: '#483AA0' }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;