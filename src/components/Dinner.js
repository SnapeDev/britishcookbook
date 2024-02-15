import { useEffect, useState } from "react";
import { marked } from "marked";
import { Link, useNavigate } from "react-router-dom";
import "./categories.css";

export default function Dinner(props) {
  const [customDinners, setCustomDinners] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const modifiedDinners = props.recipes
      .filter((data) => data.fields.category === "Dinner")
      .map((dinner, index) => {
        let customRating;
        if (index === 0 || index === 1) {
          customRating = 4; // 4 stars for the first two recipes
        } else if (index === 2 || index === 3) {
          customRating = 3; // 3 stars for the third and fourth recipes
        } else {
          customRating = dinner.fields.rating; // Original rating for the rest
        }

        return {
          ...dinner,
          fields: {
            ...dinner.fields,
            rating: customRating,
          },
        };
      });
    setCustomDinners(modifiedDinners);
  }, [props.recipes]);

  return (
    <div className="categories">
      {customDinners.map((recipe, key) => (
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
        <button className="button" onClick={() => navigate("/lunch")}>
          prev
        </button>
        <button className="button" onClick={() => navigate("/dessert")}>
          next
        </button>
      </div>
    </div>
  );
}
