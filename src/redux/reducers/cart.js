import ACTION_TYPES from "../constants/actionTypes";

const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_PRODUCT:
      return { ...state, cart: [...state.cart, action.payload] };

    default:
      return { ...state };
  }
};

export default reducer;
