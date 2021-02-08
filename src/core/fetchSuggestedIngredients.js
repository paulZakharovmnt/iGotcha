const fetchSuggestedIngredients = async (searchInput) => {
  return await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${searchInput}`
  )
    .then((resp) => resp.json())
    .then((result) => result.ingredients);
};

export default fetchSuggestedIngredients;
