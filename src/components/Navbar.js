import React from "react";
//import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import SearchBar from "./Searchbar";
import Flag from "./flag.jpg";

const Navbar = ({ recipes }) => {
  return (
    <nav className="navbar">
      <img className="union" src={Flag} width="32px" height="42px" />
      <h1>
        british <span class="food">food</span>
      </h1>

      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/breakfast">Breakfast</NavLink>
        <NavLink to="/lunch">Lunch</NavLink>
        <NavLink to="/dinner">Dinner</NavLink>
        <NavLink to="/dessert">Dessert</NavLink>
      </div>
      <SearchBar recipes={recipes} />
    </nav>
  );
};

export default Navbar;
