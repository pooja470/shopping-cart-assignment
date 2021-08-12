import {combineReducers} from 'redux';
import bannerReducer from "./banner/bannerReducer";
import categoryReducer from './categories/categoryReducer';

const rootReducer=combineReducers({bannerReducer:bannerReducer,
categoryReducer:categoryReducer});

export default rootReducer;