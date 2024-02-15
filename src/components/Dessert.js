import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import "./categories.css";

export default function Dessert(props) {
  const [customDesserts, setCustomDesserts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const modifiedDesserts = props.recipes
      .filter((data) => data.fields.category === "Dessert")
      .map((dessert, index) => {
        let customRating;
        if (index === 0) {
          customRating = 4; // 4 stars for the first recipe
        } else if (index >= 1 && index <= 3) {
          customRating = 3; // 3 stars for the 2nd, 3rd, and 4th recipes
        } else {
          customRating = dessert.fields.rating; // Original rating for the rest
        }

        return {
          ...dessert,
          fields: {
            ...dessert.fields,
            rating: customRating,
          },
        };
      });
    setCustomDesserts(modifiedDesserts);
  }, [props.recipes]);

  return (
    <div className="categories">
      {customDesserts.map((recipe, key) => (
        <Link to={`/${recipe.fields.category}/${recipe.fields.id}`} key={key}>
          <div className="items">
            <div className="item-title">
              <h1>{recipe.fields.title}</h1>
              <div className="star-rating">
                {[...Array(recipe.fields.rating)].map((_, starKey) => (
                  <span key={starKey} className="star">
                    &#9733;
                  </span>
                ))}
                {[...Array(5 - recipe.fields.rating)].map((_, starKey) => (
                  <span key={starKey} className="star">
                    &#9734;
                  </span>
                ))}
              </div>
            </div>
            <img
              src={recipe.fields.image.fields.file.url}
              width="200px"
              height="200px"
              className="item-img"
              alt={recipe.fields.title}
            />
          </div>
        </Link>
      ))}

      <button className="button" onClick={() => navigate("/dinner")}>
        prev
      </button>
    </div>
  );
}
