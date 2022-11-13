import {
    ADD_TO_CART_FAILURE,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    CLEAR_CART_FAILURE,
    CLEAR_CART_REQUEST,
    CLEAR_CART_SUCCESS,
    GET_CART_FAILURE,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    REMOVE_FROM_CART_FAILURE,
    REMOVE_FROM_CART_REQUEST,
    REMOVE_FROM_CART_SUCCESS,
    UPDATE_CART_FAILURE,
    UPDATE_CART_REQUEST,
    UPDATE_CART_SUCCESS,
  } from "./actionTypes";
  
  const initialState = {
    carts: [],
    loading: false,
    error: false,
    message: "",
    total:0
  };
  
  export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
      case GET_CART_REQUEST:
        return {
          ...state,
          loading: true,
          error: false,
        };
      case GET_CART_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          carts: payload,
          total:payload.reduce((ac,el)=>ac+(Number(el.quantity)*Number(el.productId.price)),0)
        };
      case GET_CART_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
      case ADD_TO_CART_REQUEST:
        return {
          ...state,
          loading: true,
          error: false,
        };
      case ADD_TO_CART_SUCCESS:
        const productExists = state.carts.find( cart => cart._id === payload.newCartItem._id);
        if(productExists) {
          let arr4= state.carts.map( cart => cart._id === payload._id ? payload : cart)
          return {
            ...state,
            loading: false,
            error: false,
            carts:arr4,
            total:arr4.reduce((ac,el)=>ac+(Number(el.quantity)*Number(el.productId.price)),0)
          };
        } else {
          let arr3=[...state.carts, payload.newCartItem]
          return {
            ...state,
            loading: false,
            error: false,
            carts:arr3, 
            total:arr3.reduce((ac,el)=>ac+(Number(el.quantity)*Number(el.productId.price)),0)

          };
        }
      case ADD_TO_CART_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
        case UPDATE_CART_REQUEST:
          return {
              ...state,
              loading: true,
              error: false,
          };
          case UPDATE_CART_SUCCESS:
            let arr2=state.carts.map((cart) => {
              if (cart._id === payload.updatedItem._id) {
                  return payload.updatedItem;
              }
              return cart;
          })
              return {
                  ...state,
                  loading: false,
                  error: false,
                  carts: arr2,
                  total:arr2.reduce((ac,el)=>ac+(Number(el.quantity)*Number(el.productId.price)),0)

              };
  
              case UPDATE_CART_FAILURE:
                  return {
                      ...state,
                      loading: false,
                      error: true,
                  };
                  
      case REMOVE_FROM_CART_REQUEST:
        return {
          ...state,
          loading: true,
          error: false,
        };
      case REMOVE_FROM_CART_SUCCESS:
        let arr=state.carts.filter((cart) => cart._id !== payload.id)
        return {
          ...state,
          loading: false,
          error: false,
          carts: arr,
          total:arr.reduce((ac,el)=>ac+(Number(el.quantity)*Number(el.productId.price)),0)

        };
      case REMOVE_FROM_CART_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      case CLEAR_CART_REQUEST:
        return {
          ...state,
          loading: true,
          error: false,
        };
      case CLEAR_CART_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          carts: [],
          total:0
        };
      case CLEAR_CART_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
      default:
        return state;
    }
  }
  