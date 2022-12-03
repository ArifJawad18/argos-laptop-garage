import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Product from "../Pages/Product/Product";
import SignUp from "../Pages/SignUp/SignUp";



 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/product',
                element:<Product></Product>
            },
         
            {
                path:'/login',
                element:<Login></Login>

            },
            {
                path:'/signup',
                element:<SignUp></SignUp>

            },
            {
                path:'*',
                element:<Error></Error>

            },
           
        ]

    }
])

export default router;