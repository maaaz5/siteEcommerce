import ACTION_TYPES from "../constants/actionTypes";

export const addProduct = (product) => {
  return (dispatch) => {
    dispatch({ type: ACTION_TYPES.ADD_PRODUCT, payload: product });
  };
};
