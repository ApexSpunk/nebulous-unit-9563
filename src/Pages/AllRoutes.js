
import {Routes, Route} from 'react-router-dom';
import Register from '../Components/loginLogout/Register';
import UserLoginComponent from '../Components/loginLogout/UserLoginComponent';
import Dashboard from "../Components/Admin/Dashboard";
import Products from "../Components/Admin/Products";
import Admin from "./Admin";
import Home from "./Home";
import Womens from "./Womens";
import Mens from "./Mens";
import Childs from "./Childs";
import Search from "./Search";
import SearchMen from "./SearchMen";
import SearchWoman from "./SearchWoman";
import Product from '../Components/Product';
import Login from "../Components/Loginnn";
import Header from "../Components/Header";


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element = {<UserLoginComponent />}/>
            <Route path = "/register" element = {<Register />}></Route>
            <Route path="/" element={<><Header page='home' /><Home /></>} />
            <Route path="/search" element={<><Header /><Search /><Home /></>} />
            <Route path="/womens" element={<><Header /><Womens /></>} />
            <Route path="/loginnn" element={<><Header /><Login /></>} />
            <Route path="/mens" element={<><Header /><Mens /></>} />
            <Route path="/childs" element={<><Header /><Childs /></>} />
            <Route path="/product/:id" element={<><Header /><Product /></>} />
            <Route path="searchman" element={<SearchMen />} />
            <Route path="searchwoman" element={<SearchWoman />} />
            <Route path="/admin" element={<Admin><Dashboard /></Admin>} />
            <Route path="/admin/products" element={<Admin><Products /></Admin>} />
            <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
        
    );
}

export default AllRoutes;
