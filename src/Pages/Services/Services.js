import React from 'react';
import apple from '../Services/apple.png.jpg';
import dell from '../Services/dell.png.png';
import Hw from '../Services/Hw-png.jpg';
import Service from './Service';

const Services = () => {
    const ServicesData = [
        {
            id:1,
            name: 'Apple',
            description: 'New apple',
            img: apple ,
            price:'$100'
        },
        {
            id:2,
            name: 'Dell',
            description: 'New Dell',
            img: dell ,
            price:'$200'
        },
        {
            id:3,
            name: 'Huawei',
            description: 'New Huawei',
            img: Hw ,
            price:'$300'
        },
    ]

    return (

        <div>
             <div>
                <h2 className ='text-3xl text-center uppercase font-bold text-blue-500'> Our Product </h2>
             </div>

             
             <div className='grid gap-5 ml-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    ServicesData.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }

             </div>
             <div className=' mt-4 mb-4 flex justify-center'>
         <button type="button" className="px-8 py-3 font-semibold rounded-full bg-red-400 text-gray-100"> <a href='/product'>SEE ALL PRODUCT</a></button>
         </div>

             
      
        
      </div>
    );
};

export default Services;