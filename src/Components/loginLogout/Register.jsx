import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authRegister } from '../../Redux/auth/actions'
import "./register.css"

const Register = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        address: "",
        locality: "",
        city: "",
        state: "",
        pincode: "",
        phone: "",
    })
    const handleInput = (e) => {
        const { name, value, type, checked } = e.target
        const newValue = type === "checkbox" ? checked : value
        setData({ ...data, [name]: newValue })
    }

    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();

    const { userRegister: { loading, error, message }, data: { isAuthenticated, token, user } } = useSelector(state => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
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
        if (error) {
            toast({
                title: message,
                description: 'Please try again',
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }
    }, [isAuthenticated, error]);

    return (
        <div className='mains'>
            <div className='detail' >
                <h2>PERSONAL DETAILS</h2>
            </div>
            <div className='radio'>
                <div>
                    <input style={{ fontSize: "10px" }} checked type="radio" name="" id="" />
                    <label style={{ marginLeft: "10px", fontSize: "10px" }} htmlFor="">PERSONAL</label>
                </div>
                <div>
                    <input style={{ marginLeft: "20px", fontSize: "10px" }} type="radio" name="" id="" />
                    <label style={{ marginLeft: "10px", fontSize: "10px", marginTop: '10px' }} htmlFor="">COMPANY</label>
                </div>
            </div>
            <div>
                <input style={{ marginTop: '5em' }} className='inp' type="text" name='email' placeholder='E-MAIL' value={data.email} onChange={handleInput} />
            </div>
            <div>
                <input style={{ marginRight: "3em" }} className='inp' type="text" name='password' placeholder='PASSWORD' value={data.password} onChange={handleInput} />
                <input className='inp' type="text" name='resetPassword' placeholder='REPEAT PASSWORD' value={data.resetPassword} onChange={handleInput} />
            </div>
            <div>
                <input style={{ marginRight: "3em" }} className='inp' type="text" name='name' placeholder='NAME' value={data.name} onChange={handleInput} />
                <input className='inp' type="text" name='pinCode' placeholder='PINCODE' value={data.pinCode} onChange={handleInput} />
            </div>
            <div>
                <input style={{ marginRight: "3em" }} className='inp' type="text" name='address' placeholder='ADDRESS' value={data.address} onChange={handleInput} />
                <input className='inp' type="text" name='optional' placeholder='OPTIONAL' value={data.optional} onChange={handleInput} />
            </div>
            <div>
                <input style={{ marginRight: "3em" }} className='inp' type="text" name='locality' placeholder='LOCALITY' value={data.locality} onChange={handleInput} />
                <input className='inp' type="text" name='city' placeholder='CITY' value={data.city} onChange={handleInput} />
            </div>
            <select className='inp' onChange={handleInput} name='state'>
                <option value="">STATE</option>
                <option value="Bihar">Bihar</option>
                <option value="Mumbai">Maharashtra</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangal">West Bangal</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Goa">Goa</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="Kerala">Kerala</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Jammu Kashmir">Jammu Kashmir</option>
            </select>

            <p style={{ fontSize: "8px" }}>PREFIX</p>
            <div style={{ display: "flex" }}>
                <p style={{ marginRight: "4em", marginTop: "4px", fontSize: '12px' }}>+91</p>
                <input className='tel' type="text" name='phoneNumber' placeholder='TELEPHONE' value={data.phoneNumber} onChange={handleInput} />
            </div>
            <div>
                <div>
                    <input style={{ marginTop: "4px" }} type="checkbox" name="news" />
                    <label style={{ fontSize: "12px" }}>I WISH TO RECIVE ZARA NEWS ON MY E-MAIL</label>
                </div>
                <div>
                    <input type="checkbox" name="termCondition" />
                    <label style={{ fontSize: "12px" }}>I ACCEPT THE PRIVACY STATEMENT</label>
                </div>
            </div>
            <button onClick={() => dispatch(authRegister(data))}>
                CREATE ACCOUNT
            </button>
        </div>
    )
}

export default Register