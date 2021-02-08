import React from "react";

const SuggestedListOfIngredients = ({
  listOfSuggestedIngredients,
  getListOfDrinksByIngredients,
}) => {
  return (
    <div className="suggested-list">
      {listOfSuggestedIngredients.map((ingredient) => (
        <div
          onClick={() => getListOfDrinksByIngredients(ingredient.strIngredient)}
          key={ingredient.strIngredient}
          className="suggested-ingr"
        >
          {ingredient.strIngredient}
        </div>
      ))}
    </div>
  );
};

export default SuggestedListOfIngredients;
