import React, { useState, useEffect } from "react";

export default function IngredientSelectionBox({
  onClose,
  ingredients,
  onPriceChange,
  isOpen,
}) {
  const removeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M200-440v-80h560v80H200Z" />
    </svg>
  );

  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const MAX_INGREDIENT_LIMIT = 3;

  const handleIngredientSelect = (ingredient) => {
    const ingredientCount = selectedIngredients.filter(
      (item) => item === ingredient
    ).length;

    if (ingredientCount < MAX_INGREDIENT_LIMIT) {
      setSelectedIngredients((prevIngredients) => [
        ...prevIngredients,
        ingredient,
      ]);
      onPriceChange(0.5); // Add 0.50€ for each added ingredient
    }
  };

  const handleRemoveIngredient = (ingredient) => {
    // Find the first occurrence of the ingredient and remove it
    const indexToRemove = selectedIngredients.indexOf(ingredient);
    if (indexToRemove !== -1) {
      const updatedIngredients = [...selectedIngredients];
      updatedIngredients.splice(indexToRemove, 1);
      setSelectedIngredients(updatedIngredients);
      onPriceChange(-0.5); // Remove 0.50€ for each removed ingredient
    }
  };

  const handleConfirm = () => {
    // Handle the selected ingredients (e.g., send to the server)
    // For now, let's just log them
    console.log("Selected Ingredients:", selectedIngredients);

    // Close the modal
    onClose();
  };

  const countIngredients = (ingredient) => {
    return selectedIngredients.filter((item) => item === ingredient).length;
  };

  useEffect(() => {
    // Log the selected ingredients
    console.log("Selected Ingredients:", selectedIngredients);
  }, [selectedIngredients]);

  return (
    <div className={`ingredient-selection-box ${isOpen ? "open" : ""}`}>
      <h4>Add extra:</h4>
      <ul className="extra-ingredient-div">
        {ingredients.map((ingredient) => (
          <div className="extra-ingredient-text-div">
            <li
              className="extra-ingredient-text"
              key={ingredient}
              onClick={() => handleIngredientSelect(ingredient)}
            >
              {ingredient}
              {countIngredients(ingredient) > 0
                ? `(${countIngredients(ingredient)})`
                : ""}
            </li>
            <span
              className="ingredient-remove-icon"
              onClick={() => handleRemoveIngredient(ingredient)}
            >
              {removeIcon}
            </span>
          </div>
        ))}
      </ul>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
}
