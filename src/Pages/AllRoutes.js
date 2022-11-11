import {Routes, Route} from 'react-router-dom';
import Register from '../Components/loginLogout/Register';
import UserLoginComponent from '../Components/loginLogout/UserLoginComponent';
import Home from './Home';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element = {<UserLoginComponent />}/>
            <Route path = "/register" element = {<Register />}></Route>
        </Routes>
    );
}

export default AllRoutes;