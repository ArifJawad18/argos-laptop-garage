import React from 'react';



const Service = ({service}) => {
	const {title, description, img,price} = service;
    return (
	<div>
		<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img}alt="" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">{title}</h2>
    <p>{description}</p>
    <h2 className='font-bold text-blue-600'> Price:$ {price}</h2>
    <div className="card-actions">
	<button type="button" className="px-5 py-3 font-semibold rounded-full bg-blue-500 text-gray-100"> <a href='/'>ORDER NOW</a></button>
    </div>
  </div>
</div>
</div>


    );
};

export default Service;