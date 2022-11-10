import { GET_PRODUCTS_ERROR,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_LOADING } from "./actionTypes";

const productInitalState={
    loading:false,
    error:false,
    data:[]
}

export const productReducer=(state=productInitalState,{type,payload})=>{
    switch(type){
        case GET_PRODUCTS_LOADING:{
            return{
                ...state,
                loading:true,
            }
        }
        case GET_PRODUCTS_SUCCESS:{
               return{
                ...state,
                loading:false,
                data:payload
               }
        }
        case GET_PRODUCTS_ERROR:{
            return{
                ...state,
                error:payload
            }
        }
        default:{
            return state
        }
    }
}