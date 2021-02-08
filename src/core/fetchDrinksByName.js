const fetchDrinksByName = async (searchInput) => {
  return await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`
  )
    .then((resp) => resp.json())
    .then((result) => result.drinks);
};

export default fetchDrinksByName;
