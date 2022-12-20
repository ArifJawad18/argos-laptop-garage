import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const OrdersLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="orders-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  ">
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="orders-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
   
      
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default OrdersLayout;