import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Orders = () => {
  const {user} = useContext(AuthContext);
  const [order,setOrder] = useState({})



useEffect(() =>{
  fetch( `http://localhost:5000/orders?email=${user.email}`)
  .then(res => res.json())
  .then(data => setOrder(data))
},[user?.email])

  return (
    <div>
      <h1>you have{Orders.length}</h1>
      <div className="text-3xl mb-5 text-blue-500 text-center">Orders</div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="hover">
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>

            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>

            <tr className="hover">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
