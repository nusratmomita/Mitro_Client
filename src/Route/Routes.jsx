import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root" 
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
// import ErrorPage from "../Pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
    {
        path : "/",
        Component: Root,
        // errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: "/",
                Component: Home
            },
            {
                path: "/login",
                Component: Login
            }
            ,
            {
                path: "/register",
                Component: Register
            }
            
        ]
    }
])