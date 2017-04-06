import {combineReducers} from 'redux';
import {bannerList,left,width} from '../contain/Banner/reducer.js'; 

export default combineReducers({
    bannerList,
    left,
    width
});