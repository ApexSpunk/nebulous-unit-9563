import axios from "axios"
import { GET_PRODUCTS_ERROR,GET_PRODUCTS_LOADING,GET_PRODUCTS_SUCCESS } from "./actionTypes";
export const getProducts=(category)=>async(dispatch)=>{
    try{
        dispatch({type:GET_PRODUCTS_LOADING})
        let res=await axios.get("https://cultwear.onrender.com/products?category="+ category)
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data.data}) 
    }catch(error){
        dispatch({type:GET_PRODUCTS_ERROR,payload:error.message})
    }
}