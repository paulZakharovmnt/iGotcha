const fetchDrinksByIngredient = async (ingredient) => {
  return await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
  )
    .then((resp) => resp.json())
    .then((result) => result.drinks);
};

export default fetchDrinksByIngredient;
