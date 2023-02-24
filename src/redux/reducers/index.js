import { combineReducers } from "redux";
import search from './search';
import user from './user';
import orders from './orders';
import product from './product';
import card from './card';

export default combineReducers({
    search,
    user,
    orders,
    product,
    card,
})
