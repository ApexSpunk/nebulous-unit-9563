import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Components/Admin/Dashboard';
import Products from '../Components/Admin/Products';
import Admin from './Admin';
import Home from './Home';
import Womens from './Womens';
import Mens from './Mens';
import Childs from './Childs';
import Search from "./Search";


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        
    );
}

export default AllRoutes;