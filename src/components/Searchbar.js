import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`search/${searchInput}`);
  };
  //console.log("search", props.recipes);

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input
          className="searchinput"
          type="search"
          placeholder="Search here..."
          onChange={handleChange}
          value={searchInput}
        />
        {/* <button className="botton" type="submit">
          Submit
        </button> */}
      </form>
    </div>
  );
};

export default SearchBar;
