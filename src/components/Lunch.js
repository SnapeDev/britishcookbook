import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./categories.css";

export default function Lunch(props) {
  const [customLunches, setCustomLunches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const modifiedLunches = props.recipes
      .filter((data) => data.fields.category === "Lunch")
      .map((lunch, index) => {
        // Set custom ratings for the first four recipes
        let customRating;
        if (index === 0 || index === 1) {
          customRating = 3; // 3 stars for the first and second recipes
        } else if (index === 2 || index === 3) {
          customRating = 4; // 4 stars for the third and fourth recipes
        } else {
          customRating = lunch.fields.rating; // Original rating for the rest
        }

        return {
          ...lunch,
          fields: {
            ...lunch.fields,
            rating: customRating,
          },
        };
      });
    setCustomLunches(modifiedLunches);
  }, [props.recipes]);

  return (
    <div className="categories">
      {customLunches.map((recipe, key) => (
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
      <div>
        <button className="button" onClick={() => navigate("/breakfast")}>
          prev
        </button>
        <button className="button" onClick={() => navigate("/dinner")}>
          next
        </button>
      </div>
    </div>
  );
}
