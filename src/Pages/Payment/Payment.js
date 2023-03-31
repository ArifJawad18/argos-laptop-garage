import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

console.log(stripePromise);

const Payment = () => {
  const orders = useLoaderData();
  //  const navigation = useNavigate();
  const { serviceName, price, email } = orders;
  // if (navigation.state === "loading") {
  //   return ;
  // }

  return (
    <div>
      <div className="mt-5">
        <section className="p-6 bg-white text-gray-900">
          <form
            novalidate=""
            action=""
            className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-300">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label for="Order Name" className="text-sm text-gray-800">
                    Order Name
                  </label>
                  <input
                    id="Order Name"
                    type="text"
                    placeholder="Order Name"
                    value={serviceName}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-600 border-gray-200 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="email" className="text-sm text-gray-800">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-600 border-gray-900 text-gray-900"
                  />
                </div>
                <div className="col-span-full">
                  <label for="price" className="text-sm text-gray-800">
                    Price $
                  </label>
                  <input
                    id="price"
                    type="text"
                    placeholder="Price"
                    value={price}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-600 border-gray-200 text-gray-900"
                  />
                </div>
                <div className="w-96 my-6 text-gray-800">
                  <Elements stripe={stripePromise}>
                    <CheckoutForm orders={orders} />
                  </Elements>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Payment;
