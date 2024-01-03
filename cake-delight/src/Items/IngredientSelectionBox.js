// IngredientSelectionBox.js
import React from "react";

export default function IngredientSelectionBox({
  ingredients,
  ingredientCounts,
  onClose,
  onIngredientSelect,
  onRemoveIngredient,
  onConfirm,
}) {
  return (
    <div className="ingredient-selection-box">
      <h4>Add extra:</h4>
      <ul>
        {ingredients.map((ingredient) => (
          <div className="extra-ingredient-div">
            <li key={ingredient} className="extra-ingredient-text-div">
              <p className="extra-ingredient-text">
                {ingredient}({ingredientCounts[ingredient] || 0})
              </p>
              <div className="ingredient-icon-div">
                <span
                  className="ingredient-icon"
                  onClick={() => onIngredientSelect(ingredient)}
                  disabled={ingredientCounts[ingredient] >= 3}
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
