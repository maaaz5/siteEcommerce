import ACTION_TYPES from "../constants/actionTypes";

export const fillProducts = (products) => (dispatch) => {
  dispatch({ type: ACTION_TYPES.FILL_PRODUCTS, payload: products });
};

export const setCatgeories = (categories) => (dispatch) => {
  dispatch({ type: ACTION_TYPES.SET_CATEGORIES, payload: categories });
};

export const setCurrentCategory = (category) => (dispatch) => {
  dispatch({ type: ACTION_TYPES.SET_CATEGORY, payload: category });
};
