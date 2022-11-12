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
          return {
            ...state,
            loading: false,
            error: false,
            carts: state.carts.map( cart => cart._id === payload._id ? payload : cart),
          };
        } else {
          return {
            ...state,
            loading: false,
            error: false,
            carts: [...state.carts, payload.newCartItem],
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
              return {
                  ...state,
                  loading: false,
                  error: false,
                  carts: state.carts.map((cart) => {
                      if (cart._id === payload.updatedItem._id) {
                          return payload.updatedItem;
                      }
                      return cart;
                  }),
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
        return {
          ...state,
          loading: false,
          error: false,
          carts: state.carts.filter((cart) => cart._id !== payload.id),
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
  