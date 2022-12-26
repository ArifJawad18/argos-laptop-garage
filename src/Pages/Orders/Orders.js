import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    fetch(`https://argos-laptop-garage.vercel.app/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = toast.success(" You Want to Cancel this Order");
    if (proceed) {
      fetch(`https://argos-laptop-garage.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Deleted Successfully");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrder(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`https://argos-laptop-garage.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = "Approved";

          const newOrders = [approving, ...remaining];
          setOrder(newOrders);
        }
      });
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <button className="btn btn-ghost w-full text-blue-600 text-3xl">
                  orders
                </button>
              </label>
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderRow
              key={order._id}
              order={order}
              handleDelete={handleDelete}
              handleStatusUpdate={handleStatusUpdate}
            ></OrderRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
