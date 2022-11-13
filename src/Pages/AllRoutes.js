import {Routes, Route} from 'react-router-dom';
import Register from '../Components/loginLogout/Register';
import UserLoginComponent from '../Components/loginLogout/UserLoginComponent';
import Dashboard from "../Components/Admin/Dashboard";
import Products from "../Components/Admin/Products";
import Admin from "./Admin";
import Home from "./Home";
import ProductsData from "./ProductsData";

import Search from "./Search";
import Payment from "./payment";
import Product from '../Components/Product';
import Login from "../Components/Loginnn";
import Header from "../Components/Header";
import Cart from './Cart';


const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element = {<><Header /><UserLoginComponent /></>}/>
            <Route path = "/register" element = {<><Header /><Register /></>}></Route>
            <Route path="/" element={<><Header page='home' /><Home /></>} />
            <Route path="/search" element={<><Header /><Search /><Home /></>} />
            <Route path="/productsData" element={<><Header /><ProductsData /></>} />
            <Route path="/loginnn" element={<><Header /><Login /></>} />
            {/* <Route path="/mens" element={<><Header /><Mens /></>} /> */}
            {/* <Route path="/childs" element={<><Header /><Childs /></>} /> */}
            <Route path="/product/:id" element={<><Header /><Product /></>} />
            <Route path="/payment" element={<><Header /><Payment /></>} />
            <Route path="/admin" element={<Admin><Dashboard /></Admin>} />
            <Route path="/admin/products" element={<Admin><Products /></Admin>} />
            <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
        
    );
}

export default AllRoutes;