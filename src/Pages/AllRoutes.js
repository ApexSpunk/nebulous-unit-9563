import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Components/Admin/Dashboard';
import Products from '../Components/Admin/Products';
import Admin from './Admin';
import Home from './Home';
import Search from "./Search";


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/admin" element={<Admin><Dashboard /></Admin>} />
            <Route path="/admin/products" element={<Admin><Products /></Admin>} />
            <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
    );
}

export default AllRoutes;