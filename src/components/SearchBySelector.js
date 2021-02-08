import React from "react";

const SearchByselector = ({ searchBy, setSearchBy }) => {
  return (
    <div className="searchBy-container">
      <select
        value={searchBy}
        onChange={(event) => setSearchBy(event.target.value)}
      >
        <option value="name">By Name</option>
        <option value="ingredient">By Ingredient</option>
      </select>
    </div>
  );
};

export default SearchByselector;
