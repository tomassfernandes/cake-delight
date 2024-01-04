import React, { useState } from "react";
import IngredientSelectionBox from "../Items/IngredientSelectionBox";
import { useCart } from "../CartContext";

export default function ShopItem({ cake }) {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [price, setPrice] = useState(cake.price);
  const [showIngredientBox, setShowIngredientBox] = useState(false);
  const [ingredientCounts, setIngredientCounts] = useState({});

  const { dispatch } = useCart();

  const handleIngredientSelect = (ingredient) => {
    if (
      selectedIngredients.length < 3 &&
      (ingredientCounts[ingredient] || 0) < 3
    ) {
      setSelectedIngredients((prevIngredients) => [
        ...prevIngredients,
        ingredient,
      ]);
      setIngredientCounts((prevCounts) => ({
        ...prevCounts,
        [ingredient]: (prevCounts[ingredient] || 0) + 1,
      }));
      setPrice((prevPrice) => parseFloat((prevPrice + 0.5).toFixed(2)));
    }
  };

  const handleRemoveIngredient = (ingredient) => {
    if (ingredientCounts[ingredient] > 0) {
      setSelectedIngredients((prevIngredients) =>
        prevIngredients.filter((item) => item !== ingredient)
      );
      setIngredientCounts((prevCounts) => {
        const newCounts = { ...prevCounts };
        newCounts[ingredient] = Math.max(0, prevCounts[ingredient] - 1);
        return newCounts;
      });
      setPrice((prevPrice) => parseFloat((prevPrice - 0.5).toFixed(2)));
    }
  };

  const handleConfirm = () => {
    // Handle the selected ingredients (e.g., push to a cart)
    const cakeDetails = {
      id: cake.id,
      name: cake.name,
      ingredients: selectedIngredients.map((ingredient) => ({
        name: ingredient,
        count: ingredientCounts[ingredient] || 0,
      })),
      price: price,
    };
    console.log("Cake details:", cakeDetails);

    // Close the ingredient box
    setShowIngredientBox(false);
  };

  const handleAddToCart = () => {
    const cakeDetails = {
      id: cake.id,
      name: cake.name,
      ingredients: selectedIngredients.map((ingredient) => ({
        name: ingredient,
        count: ingredientCounts[ingredient] || 0,
      })),
      price: price,
    };

    dispatch({ type: "ADD_TO_CART", payload: cakeDetails });
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
            ingredients={cake.ingredients}
            onClose={() => setShowIngredientBox(false)}
            onIngredientSelect={handleIngredientSelect}
            onRemoveIngredient={handleRemoveIngredient}
            onConfirm={handleConfirm}
            ingredientCounts={ingredientCounts}
          />
        )}

        <p className="cake-price">{price}€</p>
      </div>
      <button className="shop-cake-btn" onClick={handleAddToCart}>
        ADD TO CART
      </button>
    </div>
  );
}
