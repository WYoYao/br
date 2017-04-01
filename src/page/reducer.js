import {combineReducers} from 'redux';
import {bannerList,bannerStyle} from '../contain/Banner/reducer.js'; 

export default combineReducers({
    bannerList,
    bannerStyle
});