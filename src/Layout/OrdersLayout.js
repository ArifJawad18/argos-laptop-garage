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
</div>
        </div>
    );
};

export default OrdersLayout;