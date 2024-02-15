import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 10) {
    props.recipes.filter((recipe) => {
      return recipe.title.match(searchInput);
    });
  }

  return (
    <div className="searchbar">
      <input
        className="searchinput"
        type="search"
        placeholder="Search here..."
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );
};

export default SearchBar;
