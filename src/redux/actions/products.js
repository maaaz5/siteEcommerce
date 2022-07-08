import ACTION_TYPES from "../constants/actionTypes";

export const fillProducts = (products) => (dispatch) => {
  dispatch({ type: ACTION_TYPES.FILL_PRODUCTS, payload: products });
};
