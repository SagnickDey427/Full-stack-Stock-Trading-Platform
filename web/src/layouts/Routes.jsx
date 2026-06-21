import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout.jsx";
import HomePage from "../pages/Home/HomePage.jsx";
import AboutPage from "../pages/About/AboutPage.jsx";
import PricingPage from "../pages/Pricing/PricingPage.jsx";
import ProductsPage from "../pages/Products/ProductsPage.jsx";
import SupportPage from "../pages/Support/SupportPage.jsx";
import SignupPage from "../features/authentication/signupPage.jsx";
import LoginPage from "../features/authentication/loginPage.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout/>}>
                <Route path='' element={<HomePage/>}/>
                <Route path='about' element={<AboutPage/>}/>
                <Route path='pricing' element={<PricingPage/>}/>
                <Route path='products' element={<ProductsPage/>}/>
                <Route path='support' element={<SupportPage/>}/>
                <Route path='auth/signup' element={<SignupPage/>}/>
                <Route path='auth/login' element={<LoginPage/>}/>
            </Route>
        </>
    )
)

export default router;