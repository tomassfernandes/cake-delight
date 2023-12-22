import React, { useState } from "react";
import IngredientSelectionBox from "../Items/IngredientSelectionBox";

export default function ShopItem({ cake }) {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [price, setPrice] = useState(cake.price);
  const [showIngredientBox, setShowIngredientBox] = useState(false);

  const handleIngredientSelect = (ingredient) => {
    setSelectedIngredients((prevIngredients) => [
      ...prevIngredients,
      ingredient,
    ]);
    setPrice((prevPrice) => prevPrice + 0.5);
  };

  const handleRemoveIngredient = (ingredient) => {
    setSelectedIngredients((prevIngredients) =>
      prevIngredients.filter((item) => item !== ingredient)
    );
    setPrice((prevPrice) => prevPrice - 0.5);
  };

  const handleConfirm = () => {
    // Handle the selected ingredients (e.g., push to a cart)
    const cakeDetails = {
      id: cake.id,
      name: cake.name,
      ingredients: selectedIngredients,
      price: price,
    };
    console.log("Cake details:", cakeDetails);

    // Close the ingredient box
    setShowIngredientBox(false);
  };

  return (
    <div className="shop-cake-div">
      <img className="shop-cake-img" src={cake.img} alt={cake.name} />
      <div className="cake-text-div">
        <div className="shop-cake-name-div">
          <h3 className="shop-cake-name">{cake.name}</h3>
          <span
            className="cake-plus-icon"
            onClick={() => setShowIngredientBox(!showIngredientBox)}
          >
            {showIngredientBox ? "-" : "+"}
          </span>
        </div>

        <p className="shop-cake-text">{cake.text}</p>

        {showIngredientBox && (
          <IngredientSelectionBox
            onClose={() => setShowIngredientBox(false)}
            onIngredientSelect={handleIngredientSelect}
            onRemoveIngredient={handleRemoveIngredient}
            onConfirm={handleConfirm}
          />
        )}

        <p className="cake-price">{price}€</p>
      </div>
      <button className="shop-cake-btn">SHOP NOW</button>
    </div>
  );
}
