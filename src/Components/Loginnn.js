import { Box, Button, Input, InputGroup } from '@chakra-ui/react';
import React from 'react'
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin } from '../Redux/auth/actions';

function Login() {
    const [loginData, setLoginData] = React.useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    }

    const dispatch = useDispatch();

    const { userLogin: { loading, error, message }, data: { isAuthenticated, token, user } } = useSelector(state => state.auth);

    console.log(isAuthenticated, token, user);

    return (
        <Box w="100%" h="100vh" bg="gray.100">
            <Input type="email" placeholder="Email" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
            <Input type="password" placeholder="Password" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
            <Button onClick={() => dispatch(authLogin(loginData))}>Login</Button>
        </Box>

    )
}

export default Login