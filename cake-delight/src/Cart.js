import React from "react";
import { useCart } from "./CartContext";

export default function Cart() {
  const { cartState } = useCart();

  return (
    <section className="cart-section">
      <div className="cart-main-div">
        {cartState.cartItems.map((item) => (
          <div key={item.id}>
            <p className="cart-cake-name">{item.name}</p>
            {/* Add more details or styling as needed */}
          </div>
        ))}
      </div>
    </section>
  );
}
