import React from "react";

const OrderRow = ({order, handleDelete, handleStatusUpdate}) => {
  const { _id, serviceName, customer,phone, price, email, status } = order;
  


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
                 Email: {email}
                </span>
              </td>
              <td> Price: {price}</td>
              <th>
                <button onClick={() => handleStatusUpdate(_id)} className="btn btn-primary btn-xs">{status ? status: 'Pending'}</button>
              </th>
            </tr>

            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderRow;
