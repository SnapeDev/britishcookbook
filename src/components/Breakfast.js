import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./categories.css";
import "../App.css";

export default function Breakfast(props) {
  const [customBreakfasts, setCustomBreakfasts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const modifiedBreakfasts = props.recipes
      .filter((data) => data.fields.category === "Breakfast")
      .map((breakfast, index) => {
        let customRating;
        if (index === 0) {
          customRating = 3; // 3 stars for the first recipe
        } else if (index === 1 || index === 2) {
          customRating = 4; // 4 stars for the second and third recipes
        } else if (index === 3) {
          customRating = 5; // 5 stars for the fourth recipe
        } else {
          customRating = breakfast.fields.rating; // Original rating for the rest
        }

        return {
          ...breakfast,
          fields: {
            ...breakfast.fields,
            rating: customRating,
          },
        };
      });
    setCustomBreakfasts(modifiedBreakfasts);
  }, [props.recipes]);

  return (
    <div className="categories">
      {customBreakfasts.map((recipe, key) => (
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
      <button className="button" onClick={() => navigate("/lunch")}>
        next
      </button>
    </div>
  );
}
