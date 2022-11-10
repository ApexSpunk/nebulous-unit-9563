import {
    GET_PRODUCT, GET_PRODUCT_LOADING, GET_PRODUCT_ERROR,
    GET_PRODUCTS, GET_PRODUCTS_LOADING, GET_PRODUCTS_ERROR,
    ADD_PRODUCT, ADD_PRODUCT_LOADING, ADD_PRODUCT_ERROR,
    UPDATE_PRODUCT, UPDATE_PRODUCT_LOADING, UPDATE_PRODUCT_ERROR,
    DELETE_PRODUCT, DELETE_PRODUCT_LOADING, DELETE_PRODUCT_ERROR,
    GET_PRODUCTS_BY_SEARCH, GET_PRODUCTS_BY_SEARCH_LOADING, GET_PRODUCTS_BY_SEARCH_ERROR,
    GET_PRODUCTS_BY_FILTER, GET_PRODUCTS_BY_FILTER_LOADING, GET_PRODUCTS_BY_FILTER_ERROR,
    GET_PRODUCTS_BY_CATEGORY, GET_PRODUCTS_BY_CATEGORY_LOADING, GET_PRODUCTS_BY_CATEGORY_ERROR
} from "./actionTypes";

const productInitalState = {
    products: [],
    singleProduct: { title: '', description: '', price: '', category: '', images: [] },
    getProduct: { loading: true, error: null },
    getProducts: { loading: true, error: null },
    addProduct: { loading: true, error: null },
    updateProduct: { loading: true, error: null },
    deleteProduct: { loading: true, error: null },
    getProductsBySearch: { loading: true, error: null },
    getProductsByFilter: { loading: true, error: null },
    getProductsByCategory: { loading: true, error: null }
}

export const productReducer = (state = productInitalState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT_LOADING:
            return {
                ...state,
                getProduct: { loading: true, error: null }
            }
        case GET_PRODUCT:
            return {
                ...state,
                getProduct: { loading: false, error: null },
                singleProduct: payload
            }
        case GET_PRODUCT_ERROR:
            return {
                ...state,
                getProduct: { loading: false, error: payload }
            }
        case GET_PRODUCTS_LOADING:
            return {
                ...state,
                getProducts: { loading: true, error: null }
            }
        case GET_PRODUCTS:
            return {
                ...state,
                getProducts: { loading: false, error: null },
                products: payload
            }
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                getProducts: { loading: false, error: payload }
            }
        case ADD_PRODUCT_LOADING:
            return {
                ...state,
                addProduct: { loading: true, error: null }
            }
        case ADD_PRODUCT:
            return {
                ...state,
                addProduct: { loading: false, error: null },
                products: [...state.products, payload]
            }
        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                addProduct: { loading: false, error: payload }
            }
        case UPDATE_PRODUCT_LOADING:
            return {
                ...state,
                updateProduct: { loading: true, error: null }
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                updateProduct: { loading: false, error: null },
                products: state.products.map(product => product._id === payload._id ? payload : product)
            }
        case UPDATE_PRODUCT_ERROR:
            return {
                ...state,
                updateProduct: { loading: false, error: payload }
            }
        case DELETE_PRODUCT_LOADING:
            return {
                ...state,
                deleteProduct: { loading: true, error: null }
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                deleteProduct: { loading: false, error: null },
                products: state.products.filter(product => product._id !== payload._id)
            }
        case DELETE_PRODUCT_ERROR:
            return {
                ...state,
                deleteProduct: { loading: false, error: payload }
            }
        case GET_PRODUCTS_BY_SEARCH_LOADING:
            return {
                ...state,
                getProductsBySearch: {
                    loading: true
                    , error: null
                }
            }
        case GET_PRODUCTS_BY_SEARCH:
            return {
                ...state,
                getProductsBySearch: { loading: false, error: null },
                products: payload
            }
        case GET_PRODUCTS_BY_SEARCH_ERROR:
            return {
                ...state,
                getProductsBySearch: { loading: false, error: payload }
            }
        case GET_PRODUCTS_BY_FILTER_LOADING:
            return {
                ...state,
                getProductsByFilter: { loading: true, error: null }
            }
        case GET_PRODUCTS_BY_FILTER:
            return {
                ...state,
                getProductsByFilter: { loading: false, error: null },
                products: payload
            }
        case GET_PRODUCTS_BY_FILTER_ERROR:
            return {
                ...state,
                getProductsByFilter: { loading: false, error: payload }
            }
        case GET_PRODUCTS_BY_CATEGORY_LOADING:
            return {
                ...state,
                getProductsByCategory: { loading: true, error: null }
            }
        case GET_PRODUCTS_BY_CATEGORY:
            return {
                ...state,
                getProductsByCategory: { loading: false, error: null },
                products: payload
            }
        case GET_PRODUCTS_BY_CATEGORY_ERROR:
            return {
                ...state,
                getProductsByCategory: { loading: false, error: payload }
            }
        default:
            return state;
    }
}
