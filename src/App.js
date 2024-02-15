import { useEffect, useState } from "react";
import { client } from "./client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./components/Home";
import Breakfast from "./components/Breakfast";
import Lunch from "./components/Lunch";
import Dinner from "./components/Dinner";
import Dessert from "./components/Dessert";
import Recipes from "./components/Recipes";
import { Routes, Route } from "react-router-dom";
import Flag from "./components/flag.jpg";
import Results from "./components/Results";

function App() {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    client
      .getEntries()
      .then((res) => {
        setRecipes(res.items);

        //     console.log(res.items);
      })

      .catch((e) => console.log(e));
  }, []);

  return recipes ? (
    <div className="App">
      <Navbar recipes={recipes} />

      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/breakfast/" element={<Breakfast recipes={recipes} />} />
        <Route path="/breakfast/:id" element={<Recipes recipes={recipes} />} />
        <Route path="/lunch/" element={<Lunch recipes={recipes} />} />
        <Route path="/lunch/:id" element={<Recipes recipes={recipes} />} />
        <Route path="/dinner/" element={<Dinner recipes={recipes} />} />
        <Route path="/dinner/:id" element={<Recipes recipes={recipes} />} />
        <Route path="/dessert" element={<Dessert recipes={recipes} />} />
        <Route path="/dessert/:id" element={<Recipes recipes={recipes} />} />
        <Route path="/search/:search" element={<Results recipes={recipes} />} />
        {/* <Routes path="/recipes" element={<Recipes recipes={recipes} />} /> */}
      </Routes>
      <Footer />
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default App;
