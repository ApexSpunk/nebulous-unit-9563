import React from 'react';
import {useState,useEffect} from 'react'
import "./Search.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// const getData=()=>{
//     return axios.get(`https://cultwear.onrender.com/products?q={}`)
     
//   }

const Search = () => {
const navigate=useNavigate();
const [data,setData]=useState([])
const [query,setQuery]=useState('');

    

  useEffect(()=>{
    const handleData=async ()=>{
      // getData(query).then((res)=>setData(res.data))
    const res= await axios.get(`https://cultwear.onrender.com/products?q=${query}`);
      setData(res.data)
       }
       handleData();
       console.log(data)
  },[query])
    const handleMan=()=>{
        navigate("/searchman")
    }

    const handleWoman=()=>{
        navigate("/searchwoman")
    }
  return (
    <div>
      <div className='section'>
        
                <p onClick={handleWoman}>WOMAN</p>
                <p onClick={handleMan}>MAN</p>
                <p>KIDS</p>
            
           
      </div>  
      <div className='search_parent'>
        <input type="text" placeholder='ENTER SEARCH TERMS' className='search' onChange={(e)=>setQuery(e.target.value)} />
   
        <div className='container'>
          <div className='container1'>
            <h1>TRENDS</h1>
            <p>DRESS</p>
            <p>TOP</p>
            <p>SKIRT</p>
            <p>DRESS FOR WOMAN</p>
          </div>
          <div className='container2'>
            {data && data.data && data.data.map(ele=>(
                  <div key={ele._id} className='products'>
                  <img src={ele.images[0]} alt="" />
                    
                  <div className='title' style={{"display":"flex", "justifyContent":"space-between"}}>
                  <p>{ele.title}</p>
                  <p>₹{ele.price}</p>
                  </div>
                  
                </div>
                ))}
          </div>
        </div>
    </div>
    </div>  
   
  )
}

export default Search