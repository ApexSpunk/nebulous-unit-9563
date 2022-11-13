import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import "./login.css"


const UserLoginComponent = () => {
    const [userData, setUserData] = useState(null)
    const [text, setText] = useState({
        email:"",
        password:""
    })
    const handelInput = (e)=>{
        setText({...text, [e.target.name]:e.target.value})
    }

    const handedlApi = ()=>{
        axios.get("http://localhost:8080/UserINFO").then(res=>{
            console.log(res.data);
            setUserData(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    const navigate = useNavigate()
    

    // console.log(text.email && text.password);
    useEffect(()=>{
        handedlApi()
    },[])
    

    const handelCreate = ()=>{
        navigate("/register")
    }
    const handelLogin = ()=>{
        handedlApi()
        userData && userData.forEach((e,i)=>{

            if(e.email === text.email && e.password === text.password){
                alert("Login Successfully")
                navigate("/")
            }else if(e.email === text.email && e.password !== text.password){
                alert("Please Enter Correct Password")
            }else if(e.email !== text.email && e.password === text.password){
                alert("Please Enter Correct Email Id")
            }else{
                alert("Please Enter Correct Email and Password!")
            }
        })
    }
  return (
    <>
    <div className='main'>
        
        <div className='block1'>
        <div className='h1'>LOG IN</div>
        <input type="text" name='email' placeholder='E-MAIL' value={text.email} onChange = {handelInput}/><br/>
        <input type="text" name='password' placeholder='PASSWORD' value={text.password} onChange = {handelInput}/><br/>
        <p>HAVE YOU FORGOTTEN YOUR PASSWORD?</p><br/><br/>
        <button onClick={handelLogin}>LOG IN</button>    
        </div> 
        <div className='block2'>
            <h1 className='h2'>REGISTER</h1><br/>
            <h4>IF YOU STILL DON'T HAVE A <span style={{fontWeight:"bolder"}}>ZARA.COM</span>  ACCOUNT, USE THIS OPTION TO ACCESS THE REGISTRATION FORM.</h4><br/>
            <h4>BY GIVING US YOUR DETAILS, PURCHASING IN <span style={{fontWeight:"bolder"}}>ZARA.COM</span> WILL BE FASTER AND AN ENJOYABLE EXPERIENCE.</h4><br/><br/>
            <button onClick={handelCreate}>CREATE ACCOUNT</button>
        </div>
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

export default UserLoginComponent