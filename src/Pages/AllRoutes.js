import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Components/Admin/Dashboard';
import Products from '../Components/Admin/Products';
import Admin from './Admin';
import Home from './Home';


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin><Dashboard /></Admin>} />
            <Route path="/admin/products" element={<Admin><Products /></Admin>} />
            <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
    );
}

export default AllRoutes;