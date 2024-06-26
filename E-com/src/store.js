import { createStore } from "redux";
import { combineReducers } from "redux";
import { omit } from "lodash";

// Initial state
const initialState = {
  items: {}
};

// Reducer function
function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;
      if (state.items[product.id]) {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity + 1
            }
          }
        };
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...product,
              quantity: 1
            }
          }
        };
      }
    }
    case "REMOVE_FROM_CART": {
      const product = action.payload;
      if (state.items[product.id].quantity <= 1) {
        return {
          ...state,
          items: omit(state.items, [product.id])
        };
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity - 1
            }
          }
        };
      }
    }
    default:
      return state;
  }
}

// Combine reducers if you have more than one
const rootReducer = combineReducers({
  cart: cartReducer
});

// Create Redux store
const store = createStore(rootReducer);

export default store;