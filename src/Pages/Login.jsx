import { Box, Button, Grid, GridItem, Input, InputGroup, Text, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../Redux/auth/actions";
import { useNavigate } from "react-router-dom";


function Login() {

    const [loginData, setLoginData] = React.useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    }

    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();

    const { userLogin: { loading, error, message }, data: { isAuthenticated, token, user } } = useSelector(state => state.auth);

    useEffect(() => {
        if (isAuthenticated && token && user) {
            toast({
                title: `Welcome ${user.name}`,
                description: "You are logged in",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
            let time = setTimeout(() => {
                navigate("/");
            }, 3000);
            return () => clearTimeout(time);
        }
        if(error){
            toast({
                title: "Something went wrong",
                description: 'Please try again',
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }
        
    }, [isAuthenticated, error]);


    return (
        <Box w="100%">
            <Grid gridTemplateColumns='repeat(3,1fr)' gap={10} w="100%" p={10} >
                <GridItem colSpan={1} >
                    <Box w='60%' mx='auto' mt='32' >
                        <Text fontSize='18' fontWeight='bold' >LOG IN</Text>
                        <Text mt='6' fontSize='10' >EMAIL</Text>
                        <Input
                            type="text"
                            placeholder="ENTER EMAIL"
                            value={loginData.email}
                            border="none"
                            borderRadius="none"
                            borderBottom="1px solid black"
                            _placeholder={{ color: "black", textDecorations: "uppercase" }}
                            name="email"
                            onChange={handleChange}
                            h='8'
                            outline="none"
                            fontSize='xs'
                        />
                        <Text mt='4' fontSize='10' >PASSWORD</Text>
                        <Input
                            type="password"
                            placeholder="ENTER PASSWORD"
                            value={loginData.password}
                            border="none"
                            borderRadius="none"
                            borderBottom="1px solid black"
                            _placeholder={{ color: "black", textDecorations: "uppercase" }}
                            name="password"
                            onChange={handleChange}
                            h='8'
                            outline="none"
                            fontSize='xs'
                        />
                        <Text fontSize='10' mt='6' ml='4'>
                            HAVE YOU FORGOTTEN YOUR PASSWORD?
                        </Text>
                        <Button onClick={() => dispatch(authLogin(loginData))} w='100%' mt='12' h='10' bg='black' color='white' fontSize='sm' borderRadius='none'>
                            LOG IN
                        </Button>
                    </Box>
                </GridItem>
                <GridItem colSpan={2} >
                    <Box mt='32' ml='24' mr='96'>
                        <Text fontSize='18' fontWeight='bold'>REGISTER</Text>
                        <Text mt='6' fontSize='12'>IF YOU STILL DON'T HAVE A <b>ZARA.COM</b> ACCOUNT, USE THIS OPTION TO ACCESS THE REGISTRATION FORM.</Text>
                        <Text mt='6' fontSize='12'>BY GIVING US YOUR DETAILS, PURCHASING IN <b>ZARA.COM</b> WILL BE FASTER AND AN ENJOYABLE EXPERIENCE.</Text>
                        <Button onClick={() => dispatch(authLogin(loginData))} w='80%' mt='12' h='10' bg='black' color='white' fontSize='sm' borderRadius='none'>
                            CREATE ACCOUNT
                        </Button>
                    </Box>
                </GridItem>
            </Grid>
        </Box>

    )
}

export default Login;
