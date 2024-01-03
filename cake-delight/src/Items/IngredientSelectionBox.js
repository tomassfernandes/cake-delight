// IngredientSelectionBox.js
import React from "react";

export default function IngredientSelectionBox({
  ingredients,
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
                {ingredient} (ingredient count)
              </p>
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
