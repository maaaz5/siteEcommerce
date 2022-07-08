import { combineReducers } from "redux";

import productsReducer from "./reducers/products";
import cartReducer from "./reducers/cart";

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
