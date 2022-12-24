import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

console.log(stripePromise);

const Payment = () => {
    const Orders = useLoaderData();
    const {serviceName,price,email} = Orders
   
   
    return (
        <div>
           <h3> for{serviceName}</h3>
           <p>pay<strong>${price}</strong> </p>
           <p>Email: {email}</p>
        </div>
    );
};

export default Payment;