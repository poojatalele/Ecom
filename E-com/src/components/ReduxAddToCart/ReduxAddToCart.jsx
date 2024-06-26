import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ReduxAddToCart({ product }) {
  console.log("add to cart", product.id);

  // Use useDispatch to get the dispatch function
  const dispatch = useDispatch();

  // Define the increase function to dispatch the ADD_TO_CART action
  function increase() {
    dispatch({ type: "ADD_TO_CART", payload: product });
  }

  // Define the decrease function to dispatch the REMOVE_FROM_CART action
  function decrease() {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  }

  // Use useSelector to get the quantity of the product from the Redux state
  const quantity = useSelector((state) => state.cart.items[product.id]?.quantity || 0);

  // Conditional rendering based on the quantity
  if (quantity === 0) {
    return (
      <div>
        <button onClick={increase}>Add to Cart</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={decrease}>-</button>
        <span>{quantity}</span>
        <button onClick={increase}>+</button>
      </div>
    );
  }
}

export default ReduxAddToCart;