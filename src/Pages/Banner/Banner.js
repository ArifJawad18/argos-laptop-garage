import React from 'react';
import laptop from '../Banner/laptop.png';

const Banner = () => {
    return (
        <div>
            <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <img src={laptop} className='w-1/2' />
    <div>
      <h1 className="text-5xl font-bold">DELL</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">New one</button>
    </div>
  </div>
</div>
        
	
        </div>
    );
};

export default Banner;