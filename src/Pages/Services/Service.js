import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, title, description, img, price } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">{title}</h2>
          <p>{description}</p>
          <h2 className="font-bold text-blue-600"> Price: ${price}</h2>
          <div className="card-actions">
            <Link to={`/checkout/${_id}`}>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-full bg-blue-600 text-gray-50"
              >
                {" "}
                <a href="#">ORDER NOW</a>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
