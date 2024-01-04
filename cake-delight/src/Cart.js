import React from "react";
import { useCart } from "./CartContext";

export default function Cart({ cartVisible, onToggleCart }) {
  const { cartState, dispatch } = useCart();

  const totalPrice = cartState.cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const handleRemoveItem = (itemId) => {
    // Dispatch the REMOVE_FROM_CART action with the item ID
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id: itemId },
    });
  };

  const handleToggleCart = () => {
    // Call the parent component's function to update cartVisible
    onToggleCart();
  };

  const handleAddCake = (itemId) => {
    // Dispatch the INCREASE_QUANTITY action with the item ID
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: { id: itemId },
    });
  };

  const handleDecreaseCake = (itemId) => {
    // Dispatch the DECREASE_QUANTITY action with the item ID
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: { id: itemId },
    });
  };

  return (
    <section className={`cart-section ${cartVisible ? "cart-visible" : ""}`}>
      <div className="cart-main-div">
        <div className="cart-heading-div">
          <h3 className="cart-heading-secondary">Shopping Cart</h3>
          <span className="cart-close-btn" onClick={handleToggleCart}>
            x
          </span>
        </div>

        <div className="cart-items-container">
          {cartState.cartItems.map((item) => (
            <>
              <div key={item.id} className="cart-cake-item-div">
                <div className="cart-cake-img-div">
                  {console.log(item)}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="cart-cake-img"
                  />
                  <p className="cart-cake-name">{item.name}</p>
                </div>

                <div className="cart-adding-div">
                  <span
                    className="cart-adding-text cart-adding-btn"
                    onClick={() => handleDecreaseCake(item.id)}
                  >
                    -
                  </span>
                  <p className="cart-adding-text">{item.quantity}</p>
                  <span
                    className="cart-adding-text cart-adding-btn"
                    onClick={() => handleAddCake(item.id)}
                  >
                    +
                  </span>
                </div>

                <p className="cart-cake-price">
                  {(item.price * item.quantity).toFixed(2)}€
                </p>

                <span
                  className="delete-cake-item-btn"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  x
                </span>
              </div>
              <div className="cart-seperator"></div>
            </>
          ))}
        </div>
      </div>
      <div className="cart-checkout-div">
        <p className="cart-checkout-text">{totalPrice}€</p>
        <button className="cart-checkout-btn">CHECKOUT</button>
      </div>
    </section>
  );
}
