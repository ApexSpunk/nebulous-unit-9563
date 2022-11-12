import axios from "axios";
import { ADD_TO_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_FROM_CART_FAILURE, REMOVE_FROM_CART_REQUEST, REMOVE_FROM_CART_SUCCESS, UPDATE_CART_FAILURE, UPDATE_CART_REQUEST, UPDATE_CART_SUCCESS } from "./actionTypes";
import Cookies from "js-cookie";
import { useToast } from "@chakra-ui/react";

export const getCart = () => async (dispatch) => {
    try {
        dispatch({ type: GET_CART_REQUEST });
        const res = await axios.get(`https://cultwear.onrender.com/cart`, {
            headers: {
                token: Cookies.get("token"),
            },
        });
        console.log(res.data);
        dispatch({ type: GET_CART_SUCCESS, payload: res.data.data });
    } catch (error) {
        dispatch({
            type: GET_CART_FAILURE,
        });
    }
}

export const addProductToCart = (id) => async (dispatch) => {
    try {
        dispatch({ type: ADD_TO_CART_REQUEST });
        let cart = {productId: id, quantity: 1}
        const res = await axios.post(`https://cultwear.onrender.com/cart`, cart, {
            headers: {
                token: Cookies.get("token"),
            },
        });
        dispatch({
            type: ADD_TO_CART_SUCCESS,
            payload: {
                newCartItem: res.data.data,
                message: res.data.message
            }
        });

    } catch (error) {
        console.log(error);
        dispatch({
            type: ADD_TO_CART_FAILURE,
            payload: { message: error.message }
        });
    }
}

export const updateProductInCart = (id, quantity) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_CART_REQUEST });

        const res = await axios.put(`/api/cart/${id}`, {
            body: {
                quantity: quantity
            },
            headers: {
                token: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log('res: ', res);

        dispatch({
            type: UPDATE_CART_SUCCESS,

            payload: {
                updatedItem: res.data.updatedItem,
                message: res.data.message
            }
        });
    } catch (error) {
        dispatch({
            type: UPDATE_CART_FAILURE,
            payload: { message: error.message }
        });
    }
}




export const removeProductFromCart = (id) => async (dispatch) => {
    try {
        dispatch({ type: REMOVE_FROM_CART_REQUEST });

        const res = await axios.delete(`/api/cart/${id}`, {
            headers: {
                token: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log('res: ', res);

        dispatch({
            type: REMOVE_FROM_CART_SUCCESS,
            payload: {
                id,
                message: res.data.message
            }
        });

    } catch (error) {
        dispatch({
            type: REMOVE_FROM_CART_FAILURE,
            payload: { message: error.message }
        });
    }
}