import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layout/Root";
import Login from "../Pages/Login/Login";
import PlaceDetails from "../Pages/PlaceDetails/PlaceDetails";
import SingUp from "../Pages/SingUp/SingUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch('/places.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/placeDetails',
                element: <PlaceDetails></PlaceDetails>
            },
            {
                path: '/singup',
                element: <SingUp></SingUp>
            }
        ]
    },
]);

export default router;