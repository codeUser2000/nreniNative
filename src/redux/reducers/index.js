import { combineReducers } from "redux";
import search from './search';
import user from './user';
import orders from './orders';

export default combineReducers({
    search,
    user,
    orders,
})
