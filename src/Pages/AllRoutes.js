import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Womens from './Womens';
import Mens from './Mens';
import Childs from './Childs';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/womens" element={<Womens/>}/>
            <Route path="/mens" element={<Mens/>}/>
            <Route path="/childs" element={<Childs/>}/>
        </Routes>
        
    );
}

export default AllRoutes;