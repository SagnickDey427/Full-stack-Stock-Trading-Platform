import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout.jsx";
import Summary from "../pages/Summary.jsx";
import Orders from '../pages/Orders.jsx';
import Holdings from '../pages/Holdings.jsx';
import Positions from '../pages/Positions.jsx';
import Funds from '../pages/Funds.jsx';
import Apps from '../pages/Apps.jsx';
import ProtectRoute from "./ProtectRoute.jsx";



const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<ProtectRoute/>}>
                <Route path="/" element={<Layout />}>
                    <Route path='' element={<Summary />} />
                    <Route path='orders' element={<Orders />} />
                    <Route path='holdings' element={<Holdings />} />
                    <Route path='positions' element={<Positions />} />
                    <Route path='funds' element={<Funds />} />
                    <Route path='apps' element={<Apps />} />
                </Route>
            </Route>
        </>
    )
)

export default router;