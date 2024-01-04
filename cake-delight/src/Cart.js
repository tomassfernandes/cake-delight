import React from "react";
import { useCart } from "./CartContext";

export default function Cart() {
  const { cartState } = useCart();

  return (
    <section className="cart-section">
      <div className="cart-main-div">
        <div className="cart-heading-div">
          <h3 className="cart-heading-secondary">Shopping Cart</h3>
          <span className="cart-close-btn">x</span>
        </div>

        {cartState.cartItems.map((item) => (
          <div key={item.id} className="cart-cake-item-div">
            <div className="cart-cake-img-div">
              <img src={item.img} alt={item.name} className="cart-cake-img" />
              <p className="cart-cake-name">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
