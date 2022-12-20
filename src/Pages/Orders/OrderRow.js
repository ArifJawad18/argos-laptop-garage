import React from "react";

const OrderRow = ({order, handleDelete}) => {
  const { _id, serviceName, customer,phone, price, email } = order;
  


  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <tbody>
            <tr>
              <th>
              
              </th>
              <td>
                <div className="flex items-center space-x-3">
                <th>
            <label>
            <button onClick={() => handleDelete(_id)} className="btn btn-ghost">X</button>
            </label>
          </th>
                
                  <div>
                    <div className="font-bold">{customer}</div>
                    <div className="text-sm opacity-50">Phone Number: {phone}</div>
                  </div>
                </div>
              </td>
              <td>
              Order Name: {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">
                 Price: {price}
                </span>
              </td>
              <td>{email}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>

            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderRow;
