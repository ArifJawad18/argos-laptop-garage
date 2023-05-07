import React from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const { _id, serviceName, customer, phone, price, email, status } =
    order;

  return (
    <div>
      <div className="overflow-x-auto w-full" data-aos="fade-up"
     data-aos-duration="1000">
        <table className="table w-full">
          <tbody>
            <tr>
              <th></th>
              <td>
                <div className="flex items-center space-x-3">
                  <th>
                    <label>
                      <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-error text-yellow-50 btn-xs"
                      >
                        Delete
                      </button>
                    </label>
                  </th>

                  <div>
                    <div className="font-bold">{customer}</div>
                    <div className="text-sm opacity-50">
                      Phone Number: {phone}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                Order Name: {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">
                  Email: {email}
                </span>
              </td>
              <td>
                {" "}
                Price: <strong>${price}</strong>
              </td>
              <th>
                <button
                  onClick={() => handleStatusUpdate(_id)}
                  className="btn btn-primary btn-xs"
                >
                  {status ? status : "Pending"}
                </button>
              </th>
              <th>
                {order.price && !order.paid && (
                  <Link to={`/orders/payment/${_id}`}>
                    <button
                      type="button"
                      className="btn btn-info text-yellow-50 btn-xs"
                    >
                      {" "}
                      <a href="#">Pay</a>
                    </button>
                  </Link>
                )}
                {order.price && order.paid && (
                  <span className=" btn btn-warning text-yellow-500 btn-xs">
                    Paid
                  </span>
                )}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderRow;
