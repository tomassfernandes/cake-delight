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
          <div className="extra-ingredient-div">
            <li key={ingredient} className="extra-ingredient-text-div">
              <p className="extra-ingredient-text">{ingredient}</p>
              <div className="ingredient-icon-div">
                <span
                  className="ingredient-icon"
                  onClick={() => onIngredientSelect(ingredient)}
                >
                  +
                </span>
                <span
                  className="ingredient-icon"
                  onClick={() => onRemoveIngredient(ingredient)}
                >
                  -
                </span>
              </div>
            </li>
          </div>
        ))}
      </ul>
      <div className="confirm-cancel-btn-div">
        <button
          className="ingredient-btn ingredient-confirm-btn"
          onClick={onConfirm}
        >
          Confirm
        </button>
        <button
          className="ingredient-btn ingredient-cancel-btn"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
