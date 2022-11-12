import axios from 'axios'
import React, { useState } from 'react'

const Register = () => {
    const [data, setData] = useState({
        email:"",
        password:"",
        resetPassword:"",
        name:"",
        pinCode:"",
        address:"",
        optional:"",
        locality:"",
        city:"",
        state:"",
        phoneNumber:"",
        news:false,
        termCondition:false
    })
    const handelInput = (e)=>{
        const {name, value, type, checked}  = e.target
        const newValue = type==="checkbox"?checked:value
        setData({...data,[name]:newValue})
    }

    const handelApi  = ()=>{
        axios.post("http://localhost:8080/UserINFO",data).then(res=>{
            console.log(res.data);
        }).catch(err=>{
            console.log(err);
        })
    }

    const handelCreateAcc = ()=>{
        handelApi()
        alert("User Created!!!")
    }

    return (
        <>
            <div className='personalDetails'>
                <h2>PERSONAL DETAILS</h2>
            </div>
            {/* <div className='checkBox'>
                <div>
                    <input type="checkbox" name="" id="" value={} onChnage = {handelInput} />
                    <label htmlFor="">PERSONAL</label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" value={} onChnage = {handelInput} />
                    <label htmlFor="">COMPANY</label>
                </div>
            </div> */}
            <div>
                <input type="text" name='email' placeholder='E-MAIL' value={data.email} onChange = {handelInput} />
            </div>
            <div>
                <input type="text" name='password' placeholder='PASSWORD' value={data.password} onChange = {handelInput} />
                <input type="text" name='resetPassword' placeholder='REPEAT PASSWORD' value={data.resetPassword} onChange = {handelInput} />
            </div>
            <div>
                <input type="text" name='name' placeholder='NAME' value={data.name} onChange = {handelInput} />
                <input type="text" name='pinCode' placeholder='PINCODE' value={data.pinCode} onChange = {handelInput} />
            </div>
            <div>
                <input type="text" name='address' placeholder='ADDRESS' value={data.address} onChange = {handelInput} />
                <input type="text" name='optional' placeholder='OPTIONAL' value={data.optional} onChange = {handelInput} />
            </div>
            <div>
                <input type="text" name='locality' placeholder='LOCALITY' value={data.locality} onChange = {handelInput} />
                <input type="text" name='city' placeholder='CITY' value={data.city} onChange = {handelInput} />
            </div>
            <select onChange = {handelInput} name='state'>
                <option value="">state</option>
                <option value="Bihar">Bihar</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangal">Bangal</option>
            </select>
            <div>
                <p>+91</p>
                <input type="text" name = 'phoneNumber' placeholder='TELIPHONE' value={data.phoneNumber} onChange = {handelInput} />
            </div>
            <div>
                <div>
                    <input type="checkbox" name="news" checked={data.news} onChange = {handelInput} />
                    <label htmlFor="">I WISH TO RECIVE ZARA NEWS ON MY E-MAIL</label>
                </div>
                <div>
                    <input type="checkbox" name="termCondition" checked={data.termCondition} onChange = {handelInput} />
                    <label htmlFor="">I ACCEPT THE PRIVACY STATEMENT</label>
                </div>
            </div>
            <button onClick={handelCreateAcc}>CREATE ACCOUNT</button>
        </>
    )
}

export default Register