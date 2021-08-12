import {combineReducers} from 'redux';
import bannerReducer from "./banner/bannerReducer";

const rootReducer=combineReducers({bannerReducer:bannerReducer});

export default rootReducer;