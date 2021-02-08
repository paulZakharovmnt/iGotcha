import "./App.css";
import { useEffect, useState, useCallback } from "react";
import { useDebounce } from "use-debounce";
import fetchDrinksByIngredient from "./core/fetchDrinksByIngredient";
import fetchDrinksByName from "./core/fetchDrinksByName";
import fetchSuggestedIngredients from "./core/fetchSuggestedIngredients";
import InputSearch from "./components/InputSearch";
import SearchByselector from "./components/SearchBySelector";
import SuggestedListOfIngredients from "./components/SuggestedListOfIngredients";
import ListOfDrinks from "./components/ListOfDrinks";

function App() {
  const [listOfDrinks, setListOfDrinks] = useState([]);
  const [listOfSuggestedIngredients, setListOfSuggestedIngredients] = useState(
    []
  );
  const [searchBy, setSearchBy] = useState("name");
  const [searchInput, setSearchInput] = useState("");
  const [debouncedInput] = useDebounce(searchInput, 300);

  const getListOfDrinksByName = useCallback(async () => {
    const drinks = await fetchDrinksByName(debouncedInput);
    if (drinks === null) {
      return;
    }
    setListOfDrinks(drinks);
  }, [debouncedInput]);

  const getSuggestedListOfIngredients = useCallback(async () => {
    const listOfIngredients = await fetchSuggestedIngredients(debouncedInput);
    if (listOfIngredients === null) {
      return;
    }
    setListOfSuggestedIngredients(listOfIngredients);
  }, [debouncedInput]);

  const getListOfDrinksByIngredients = async (selectedIngredient) => {
    const drinks = await fetchDrinksByIngredient(selectedIngredient);
    setListOfDrinks(drinks);
    setSearchInput("");
    setListOfSuggestedIngredients([]);
  };

  useEffect(() => {
    if (debouncedInput.length > 2) {
      if (searchBy === "name") {
        getListOfDrinksByName();
        return;
      }
      if (searchBy === "ingredient") {
        getSuggestedListOfIngredients();
        return;
      }
    }
  }, [
    debouncedInput,
    searchBy,
    getListOfDrinksByName,
    getSuggestedListOfIngredients,
  ]);

  return (
    <div className="App">
      <header className="header">
        <InputSearch
          setSearchInput={setSearchInput}
          searchInput={searchInput}
        />
        <SearchByselector searchBy={searchBy} setSearchBy={setSearchBy} />
        {listOfSuggestedIngredients.length > 0 && (
          <SuggestedListOfIngredients
            listOfSuggestedIngredients={listOfSuggestedIngredients}
            getListOfDrinksByIngredients={getListOfDrinksByIngredients}
            setSearchInput={setSearchInput}
          />
        )}
      </header>

      <ListOfDrinks listOfDrinks={listOfDrinks} />
    </div>
  );
}

export default App;
