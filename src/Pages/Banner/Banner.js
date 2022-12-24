import React from 'react';
import laptop from '../Banner/laptop.png';
import laptop2 from '../Banner/laptop2.png';
import laptop3 from '../Banner/laptop3.png';


const Banner = () => {
    return (
    <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    
    <div className="carousel  w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={laptop} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={laptop2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={laptop3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
    <div>
      <h1 className="text-5xl font-bold text-blue-500">Welcome To Argos Laptop Garage</h1>
      <p className="py-6 font-bold">Get Products Easily</p>
   
    </div>
  </div>
</div>
        
	
     
    );
};

export default Banner;