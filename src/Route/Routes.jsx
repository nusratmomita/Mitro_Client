import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
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
            
        ]
    }
])