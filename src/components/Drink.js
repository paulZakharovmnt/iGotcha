import React from "react";

const Drink = ({ drink }) => {
  return (
    <div className="drink-container">
      <div className="drink-header">
        <div className="blue-circle"></div>
        <div className="drink-name">
          <h3>{drink.strDrink}</h3>
          <p>{drink.strCategory}</p>
        </div>
      </div>
      <div className="drink-photo">
        <img src={drink.strDrinkThumb} alt="" />
      </div>
      <div className="drink-description">
        Some interesting info about this drink
      </div>
      <div className="drink-control">
        <button>Open</button>
        <button>Share</button>
      </div>
    </div>
  );
};

export default Drink;
