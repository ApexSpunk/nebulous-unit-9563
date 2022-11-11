import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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
    <div>
        <div>
        <input type="text" name='email' placeholder='Enter Email' value={text.email} onChange = {handelInput}/>
        <input type="text" name='password' placeholder='Enter Password' value={text.password} onChange = {handelInput}/>
        <button onClick={handelLogin}>Login</button>    
        </div> 
        <div>
            <h1>REGISTER</h1>
            <button onClick={handelCreate}>CREATE ACCOUNT</button>
        </div>
    </div>
  )
}

export default UserLoginComponent