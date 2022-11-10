import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from '../Redux/products/actions'
import { useNavigate } from 'react-router-dom';
import "./Search.css"

const SearchMen = () => {
  const dispatch=useDispatch();
  const {loading,data,error}=useSelector(state=>state.product);
  const navigate=useNavigate();

  useEffect(()=>{
    dispatch(getProducts("Mens"))
  },[])

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

      <div>
        <input type="text" placeholder='ENTER SEARCH TERMS' className='search'  />
      </div>
        <div className='container2'>
            {loading?"loading": data.map(ele=>(
                  <div key={ele._id} className='products'>
                  <img src={ele.images[0]} alt="" />
                    
                  <div style={{"display":"flex", "justifyContent":"space-between"}}>
                  <p>{ele.title}</p>
                  <p>₹{ele.price}</p>
                  </div>
                  
                </div>
                ))}
          </div>
    </div>
    
  )
}

export default SearchMen