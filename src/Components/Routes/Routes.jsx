import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Error from "../Pages/Error/Error";
import Apps from "../Pages/Apps/Apps";
import AllCards from "../Pages/AllCards/AllCards";
import AppDetails from "../Pages/AppDetails/AppDetails";
import Installed from "../Pages/Installed/Installed";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: 'allCards',
                Component: AllCards
            },
            {path: 'installed', Component: Installed},
            { path: 'appDetails/:appId', Component: AppDetails }
        ]
    }
])