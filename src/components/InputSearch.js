import React from "react";

const InputSearch = ({ searchInput, setSearchInput }) => {
  return (
    <div className="search-input-container">
      <input
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default InputSearch;
