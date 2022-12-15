import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Product = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('')
        .then(res =>res.json())
        .then(data => setServices(data))

    },[])
    return (
        <div>
            <div className='grid gap-6 ml-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           {
            services.map(service => <ProductCard
            key={service._id}
            service={service}
            ></ProductCard>)

           }
        </div>
        </div>
    );
};

export default Product;