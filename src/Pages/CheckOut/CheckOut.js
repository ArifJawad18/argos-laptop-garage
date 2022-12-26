import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const CheckOut = () => {
    const {_id,title,price} = useLoaderData();
    const {user,} = useContext(AuthContext);

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.name.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service:_id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
       
        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged){
                toast.success('Order Confirmed')
                form.reset();
            }
        })
        
    }
    return (
        <div>
           <section className="p-6 text-gray-800">
	<form  onSubmit={handlePlaceOrder}  novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50 ng-untouched ng-pristine ng-valid">
		
		<div>
			<label for="name" className="block mb-1 ml-1"></label>
			<input id="name" type="text" placeholder="Your name" defaultValue={title} required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 bg-gray-100" />
		</div>
		<div>
			<label for="price" className="block mb-1 ml-1"></label>
			<input id="price" type="text" placeholder="Price" defaultValue={price} required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 bg-gray-100" />
		</div>
        <div>
			<label for="email" className="block mb-1 ml-1"></label>
			<input id="email" type="email" placeholder="Your email" defaultValue={user?.email} disabled required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 bg-gray-100" readOnly/>
		</div>
		<div>
			<label for="name" className="block mb-1 ml-1"></label>
			<input id="name" type="text" placeholder="Your name"   className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 bg-gray-100" />
		</div>
		<div>
			<label for="phone" className="block mb-1 ml-1"></label>
			<input id="phone" type="text" placeholder="Phone number" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 bg-gray-100" />
		</div>
	
		<div>
			<label for="message" className="block mb-1 ml-1"></label>
			<textarea id="message" type="text" placeholder="Message..." required className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-sky-600 bg-gray-100"></textarea>
		</div>
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-sky-600 focus:ring-sky-600 hover:ring-sky-600 text-gray-50">Submit</button>
		</div>
	</form>
</section>
        </div>
    );
};

export default CheckOut;