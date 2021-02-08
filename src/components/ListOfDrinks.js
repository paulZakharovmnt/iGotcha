import React from "react";
import Drink from "./Drink";
import "./ListOfDrinks.css";

const ListOfDrinks = ({ listOfDrinks }) => {
  if (listOfDrinks.length < 1) {
    return <div>No drinks found</div>;
  }
  return (
    <div className="list-of-drinks-container">
      {listOfDrinks.map((drink) => {
        return <Drink drink={drink} key={drink.idDrink} />;
      })}
    </div>
  );
};

export default ListOfDrinks;
