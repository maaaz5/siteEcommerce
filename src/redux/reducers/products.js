import ACTION_TYPES from "../constants/actionTypes";

const initialState = {
  products: [],
  product: null,
  categories: [],
  currentCategory: "all",
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTION_TYPES.FILL_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case ACTION_TYPES.SET_CATEGORY:
      console.log(action.payload);
      return { ...state, currentCategory: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;
