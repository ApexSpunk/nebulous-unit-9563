import {Routes, Route} from 'react-router-dom';
import Register from '../../Pages/Register/Register';
import UserLoginComponent from '../../Pages/Login/Login';
import Dashboard from "../Admin/Dashboard";
import Products from "../Admin/Products";
import Admin from "../../Pages/Admin/Admin";
import Home from "../../Pages/Home/Home";
import ProductsData from "../../Pages/Store/Store";
import Search from "../../Pages/Search/Search";
import Payment from "../../Pages/Payment/Payment";
import Product from '../Product/Product';
import Header from "../Header/Navbar";
import Cart from '../../Pages/Cart/Cart';
import Checkout from '../../Pages/Checkout/Checkout';


const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element = {<><Header /><UserLoginComponent /></>}/>
            <Route path = "/register" element = {<><Header /><Register /></>}></Route>
            <Route path="/" element={<><Header page='home' /><Home /></>} />
            <Route path="/search" element={<><Header /><Search /></>} />
            <Route path="/cart" element={<><Header /><Cart /></>} />
            <Route path="/store" element={<><Header /><ProductsData /></>} />
            <Route path="/product/:id" element={<><Header /><Product /></>} />
            <Route path="/payment" element={<><Header /><Payment /></>} />
            <Route path="/checkout" element={<><Header /><Checkout /></>} />
            <Route path="/admin" element={<Admin><Dashboard /></Admin>} />
            <Route path="/admin/products" element={<Admin><Products /></Admin>} />
            <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
        
    );
}

export default AllRoutes;