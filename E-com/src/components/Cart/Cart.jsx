import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

function Cart() {
  // Access cart state from Redux
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {Object.values(cartItems).map((item) => (
        <ProductCard key={item.id} product={item} inCart />
      ))}
    </div>
  );
}

export default Cart;