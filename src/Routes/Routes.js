import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import OrdersLayout from "../Layout/OrdersLayout";
import Blog from "../Pages/Blog/Blog";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Orders from "../Pages/Orders/Orders";
import Payment from "../Pages/Payment/Payment";
import SignUp from "../Pages/SignUp/SignUp";
import DisplayError from "../Shared/DisplayError/DisplayError";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(`https://argos-laptop-garage-server.vercel.app/allservice/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/orders/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`https://argos-laptop-garage-server.vercel.app/orders/${params.id}`),
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
  {
    path: "/orders",
    element: (
      <PrivateRoute>
        <OrdersLayout></OrdersLayout>
      </PrivateRoute>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
    ],
  },
]);

export default router;
