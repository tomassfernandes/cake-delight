// IngredientSelectionBox.js
import React from "react";

export default function IngredientSelectionBox({
  onClose,
  onIngredientSelect,
  onRemoveIngredient,
  onConfirm,
}) {
  const ingredients = ["Ingredient 1", "Ingredient 2", "Ingredient 3"];

  return (
    <div className="ingredient-selection-box">
      <h4>Add extra:</h4>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>
            {ingredient}
            <button onClick={() => onIngredientSelect(ingredient)}>Add</button>
            <button onClick={() => onRemoveIngredient(ingredient)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button onClick={onConfirm}>Confirm</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
