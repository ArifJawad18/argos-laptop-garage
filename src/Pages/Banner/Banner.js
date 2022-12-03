import React from 'react';
import laptop from '../Banner/laptop.png';

const Banner = () => {
    return (
    <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <img src={laptop} className='w-1/2' />
    <div>
      <h1 className="text-5xl font-bold text-blue-500">Welcome To Argos Laptop Garage</h1>
      <p className="py-6 font-bold">Get Products Easily</p>
    </div>
  </div>
</div>
        
	
     
    );
};

export default Banner;