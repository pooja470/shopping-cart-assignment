import {combineReducers} from 'redux';
import bannerReducer from "./banner/bannerReducer";
import categoryReducer from './categories/categoryReducer';
import cartReducer from "./cart/cartReducer";
import productReducer from "./products/productReducer";
const rootReducer=combineReducers({bannerReducer:bannerReducer,
categoryReducer:categoryReducer,
products: productReducer,
cart: cartReducer,
});

export default rootReducer;