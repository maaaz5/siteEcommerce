import ACTION_TYPES from "../constants/actionTypes";

const initialState = {
  products: [],
  product: null,
  cateogries: [],
  category: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTION_TYPES.FILL_PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return { ...state };
  }
};

export default reducer;
