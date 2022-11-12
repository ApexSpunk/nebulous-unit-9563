import axios from 'axios'
import React, { useState } from 'react'
import "./register.css"

const Register = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        resetPassword: "",
        name: "",
        pinCode: "",
        address: "",
        optional: "",
        locality: "",
        city: "",
        state: "",
        phoneNumber: "",
        news: false,
        termCondition: false
    })
    const handelInput = (e) => {
        const { name, value, type, checked } = e.target
        const newValue = type === "checkbox" ? checked : value
        setData({ ...data, [name]: newValue })
    }

    const handelApi = () => {
        axios.post("http://localhost:8080/UserINFO", data).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    const handelCreateAcc = () => {
        handelApi()
        alert("User Created!!!")
    }

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
                <input style={{ marginTop: '5em' }} className='inp' type="text" name='email' placeholder='E-MAIL' value={data.email} onChange={handelInput} />
            </div>
            <div>
                <input style={{ marginRight: "3em" }} className='inp' type="text" name='password' placeholder='PASSWORD' value={data.password} onChange={handelInput} />
                <input className='inp' type="text" name='resetPassword' placeholder='REPEAT PASSWORD' value={data.resetPassword} onChange={handelInput} />
            </div>
            <div>
                <input style={{ marginRight: "3em" }} className='inp' type="text" name='name' placeholder='NAME' value={data.name} onChange={handelInput} />
                <input className='inp' type="text" name='pinCode' placeholder='PINCODE' value={data.pinCode} onChange={handelInput} />
            </div>
            <div>
                <input style={{ marginRight: "3em" }} className='inp' type="text" name='address' placeholder='ADDRESS' value={data.address} onChange={handelInput} />
                <input className='inp' type="text" name='optional' placeholder='OPTIONAL' value={data.optional} onChange={handelInput} />
            </div>
            <div>
                <input style={{ marginRight: "3em" }} className='inp' type="text" name='locality' placeholder='LOCALITY' value={data.locality} onChange={handelInput} />
                <input className='inp' type="text" name='city' placeholder='CITY' value={data.city} onChange={handelInput} />
            </div>
            <select className='inp' onChange={handelInput} name='state'>
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
                <input className='tel' type="text" name='phoneNumber' placeholder='TELEPHONE' value={data.phoneNumber} onChange={handelInput} />
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
            <button onClick={handelCreateAcc}>
                CREATE ACCOUNT
            </button>
        </div>
    )
}

export default Register