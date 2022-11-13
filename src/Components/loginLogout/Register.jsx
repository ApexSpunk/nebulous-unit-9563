import axios from 'axios'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import "./register.css"

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
        <div className='main'>
            <div className='detail' >
                <h2>PERSONAL DETAILS</h2>
            </div>
            <div className='radio'>
                <div>
                    <input style={{ fontSize:"10px"}} type="radio" name="" id=""  onChnage = {handelInput} />
                    <label style={{marginLeft:"10px",fontSize:"10px"}} htmlFor="">PERSONAL</label>
                </div>
                <div>
                    <input style={{marginLeft:"20px", fontSize:"10px"}} type="radio" name="" id=""  onChnage = {handelInput} />
                    <label style={{marginLeft:"10px",fontSize:"10px", marginTop:'10px'}} htmlFor="">COMPANY</label>
                </div>
            </div>
            <div>
                <input style={{marginTop:'3em'}} className='inp' type="text" name='email' placeholder='E-MAIL' value={data.email} onChange = {handelInput} />
            </div>
            <div>
                <input style={{marginRight:"3em"}} className='inp' type="text" name='password' placeholder='PASSWORD' value={data.password} onChange = {handelInput} />
                <input className='inp' type="text" name='resetPassword' placeholder='REPEAT PASSWORD' value={data.resetPassword} onChange = {handelInput} />
            </div>
            <div>
                <input style={{marginRight:"3em"}} className='inp' type="text" name='name' placeholder='NAME' value={data.name} onChange = {handelInput} />
                <input className='inp' type="text" name='pinCode' placeholder='PINCODE' value={data.pinCode} onChange = {handelInput} />
            </div>
            <div>
                <input style={{marginRight:"3em"}} className='inp' type="text" name='address' placeholder='ADDRESS' value={data.address} onChange = {handelInput} />
                <input className='inp' type="text" name='optional' placeholder='OPTIONAL' value={data.optional} onChange = {handelInput} />
            </div>
            <div>
                <input style={{marginRight:"3em"}} className='inp' type="text" name='locality' placeholder='LOCALITY' value={data.locality} onChange = {handelInput} />
                <input className='inp' type="text" name='city' placeholder='CITY' value={data.city} onChange = {handelInput} />
            </div>
            <div className='state'>
            <select className='inp' onChange = {handelInput} name='state'>
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
            <div className='reg'>
                <p>REGION</p>
                <p>India</p>
            </div>
            </div>
            <p style={{fontSize:"8px"}}>PREFIX</p>
            <div style={{display:"flex"}}>
                <p style={{marginRight:"4em",marginTop:"4px", fontSize:'12px'}}>+91</p>
                <input className='tel'  type="text" name = 'phoneNumber' placeholder='TELIPHONE' value={data.phoneNumber} onChange = {handelInput} />
            </div>
            <div>
                <div>
                    <input className='check' type="checkbox" name="news" checked={data.news} onChange = {handelInput} />
                    <label className='lab' htmlFor="">I WISH TO RECIEVE ZARA NEWS ON MY E-MAIL</label>
                </div>
                <div>
                    <input className='check1' type="checkbox" name="termCondition" checked={data.termCondition} onChange = {handelInput} />
                    <label className='lab' htmlFor="">I ACCEPT THE <u> PRIVACY STATEMENT</u></label>
                </div>
            </div>
            <button className='button' onClick={handelCreateAcc}>CREATE ACCOUNT</button>
        </div>
        <div className=' bottom'>
        <div>
            <h3>HELP</h3>
            <p>SHOP AT ZARA.COM</p>
            <p>PRODUCT</p>
            <p>GIFT CARD</p>
            <p>PAYMENT</p>
            <p>SHIPPING</p>
            <p>EXCHANGES AND RETURNS</p>
            <p>SHOPS AND COMPANY</p>
            <p>CLOTHES COLLECTION PROGRAMME</p>
            <p>MY ACCOUNT</p>
        </div>
        <div>
            <h3>FOLLOW US</h3>
            <p>NEWSLETTER</p>
            <p>INSTAGRAM</p>
            <p>FACEBOOK</p>
            <p>TWITTER</p>
            <p>PINTREST</p>
            <p>YOUTUBE</p>
        </div>
        <div>
            <h3>COMPANY</h3>
            <p>ABOUT US</p>
            <p>JOIN LIFE</p>
            <p>OFFICES</p>
            <p>STORIES</p>
            <p>WORK WITH US</p>
        </div>
        <div>
            <h3>POLICIES</h3>
            <p>PRIVACY POLICY</p>
            <p>PURCHASING CONDITIONS</p>
            <p>GIFT CARD CONDITIONS</p>
            <p>COOKIES SETTINGS</p>
        </div>
    </div>
    <div className='line'>
        <p>INDIA</p>
        <p>ENGLISH  © ALL RIGHTS RESERVED</p>
    </div>
    <div className='bot2'>
        <p>NAME AND ADDRESS OF THE MANUFACTURER:</p>
        <p>INDUSTRIA DE DISEÑO TEXTIL, S.A. (INDITEX, S.A.)</p>
        <p>AVENIDA DE LA DIPUTACIÓN, EDIFICIO INDITEX, 15143, ARTEIXO (A CORUÑA), SPAIN</p>
    </div>
    </>
    )
}

export default Register