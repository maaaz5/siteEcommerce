import { combineReducers } from "redux";

import productsReducer from "./reducers/products";

export default combineReducers({
  products: productsReducer,
});
