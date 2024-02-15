import React from "react";
import { useEffect, useState } from "react";
import Breakfast from "./Breakfast";
import "./comp.css";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import Flag from "./flag.jpg";

export default function Home(props) {
  // get all recipes
  // create 4 categories and filter out by category (state "breakfast" should contain all breakfast recipes)
  // display each category's picture statically at first to confirm everything works
  // create a function that changes the index of a given array every x amount of seconds
  // the call to that function should happen inside of a useEffect

  console.log(props.recipes);
  const [randomnum, SetRandom] = useState(0);

  const breakfasts = props.recipes.filter(
    (recipe) => recipe.fields.category === "Breakfast"
  );

  const lunches = props.recipes.filter(
    (recipe) => recipe.fields.category === "Lunch"
  );

  const dinners = props.recipes.filter(
    (recipe) => recipe.fields.category === "Dinner"
  );

  const desserts = props.recipes.filter(
    (recipe) => recipe.fields.category === "Dessert"
  );
  console.log("breakfast", breakfasts[0].fields.image.fields.file.url);
  console.log("lunch", lunches[0].fields.image.fields.file.url);
  console.log("dinner", dinners[0].fields.image.fields.file.url);
  console.log("dessert", desserts[0].fields.image.fields.file.url);
  // get Random image index using function
  function random(arr) {
    const intervalId = setInterval(() => {
      const len = arr.length;
      SetRandom(Math.floor(Math.random() * len));
    }, 4000);
    return () => clearInterval(intervalId);
  }
  // call function inside useEffect pass variable as any category's as a length

  useEffect(() => {
    random(breakfasts);
  }, []);
  // Random image from all categories
  console.log(
    "breakfasturl",
    breakfasts[randomnum].fields.image.fields.file.url
  );
  console.log("lunchurl", lunches[randomnum].fields.image.fields.file.url);
  console.log("dinner", dinners[randomnum].fields.image.fields.file.url);
  console.log("dessert", desserts[randomnum].fields.image.fields.file.url);

  return (
    <div id="home">
      <div id="home-categories">
        <div class="home-categories">
          <Link to={`/breakfast`}>
            <img
              src={breakfasts[randomnum].fields.image.fields.file.url}
              width="300px"
              height="300px"
              style={{ borderRadius: "5px" }}
            />
            <h1>{breakfasts[3].fields.category}</h1>
          </Link>
        </div>
        <div class="home-categories">
          <Link to={`/lunch`}>
            <img
              src={lunches[randomnum].fields.image.fields.file.url}
              width="300px"
              height="300px"
              style={{ borderRadius: "5px" }}
            />
            <h1>{lunches[3].fields.category}</h1>
          </Link>
        </div>
        <div class="home-categories">
          <Link to={`/dinner`}>
            <img
              src={dinners[randomnum].fields.image.fields.file.url}
              width="300px"
              height="300px"
              style={{ borderRadius: "5px" }}
            />
            <h1>{dinners[1].fields.category}</h1>
          </Link>
        </div>
        <div class="home-categories">
          <Link to={`/dessert`}>
            <img
              src={desserts[randomnum].fields.image.fields.file.url}
              width="300px"
              height="300px"
              style={{ borderRadius: "5px" }}
            />
            <h1>{desserts[0].fields.category}</h1>
          </Link>
        </div>
        {/* 
        <Image
          source={breakfasts[currentImageIndex]}
          style={styles.imageStyle}
        /> */}
      </div>
    </div>
  );
}
