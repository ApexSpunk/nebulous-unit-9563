import { productReducer } from './products/reducer';
import authReducer from './auth/reducer';
import cartReducer from './cart/reducer';
import themeReducer from './theme/reducer';
import thunk from 'redux-thunk';

import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
    combineReducers
} from 'redux';


const rootReducer = combineReducers({
    product:productReducer,
    auth: authReducer,
    cart: cartReducer,
    theme: themeReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);