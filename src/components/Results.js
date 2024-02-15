import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import styles from "./Results.css";

export default function Results({ recipes }) {
  const { search } = useParams();
  const result = recipes.filter((recipe) => {
    console.log("result", recipes);
    if (search === "") {
      return recipe;
    } else {
      return recipe.fields.title.toLowerCase().includes(search);
    }
  });
  return (
    <div>
      {result.map((recipe) => (
        <div key={uuidv4()} className="result">
          <Link to={`/${recipe.fields.category}/${recipe.fields.id}`}>
            <h2>{recipe.fields.title}</h2>
          </Link>
          <img
            src={recipe.fields.image.fields.file.url}
            alt={recipe.fields.title}
            className="img"
          />
        </div>
      ))}
    </div>
  );
}
