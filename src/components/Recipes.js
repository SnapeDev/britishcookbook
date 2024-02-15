import { useParams, useNavigate } from "react-router-dom";
import { marked } from "marked";
import styles from "./Recipes.css";

export default function Recipes({ recipes }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const SingleRecipe = recipes.find(
    (element) => element.fields.id === Number(id)
  );
  console.log("Hello recipes", SingleRecipe);
  console.log(recipes);
  const localRating = 4;

  const recipeInstruction = marked(SingleRecipe.fields.instructions);

  return (
    <div>
      <div className="card">
        <img
          src={SingleRecipe.fields.image.fields.file.url}
          alt={SingleRecipe.fields.title}
          className="card-image"
        />
        <div className="detail">
          <h2>{SingleRecipe.fields.title}</h2>
          <div className="star-rating">
            {[...Array(localRating)].map(() => {
              return <span className="star">&#9733;</span>;
            })}
            {[...Array(5 - localRating)].map(() => {
              return <span className="star">&#9734;</span>;
            })}
          </div>
        </div>
      </div>
      <div className="card-body">
        <h3>Ingredients:</h3>
        {SingleRecipe.fields.ingredients.map((ingredient) => (
          <div className="check">
            <input type="checkbox" id="scales" name="scales"></input>
            {ingredient}
          </div>
        ))}

        {/* <h5>Description: {console.log(recipe.fields.instructions)}</h5> */}
        <div className="method">
          <h3>Instruction:</h3>
          <section
            className="section"
            dangerouslySetInnerHTML={{ __html: recipeInstruction }}
          />
          <div id="return">
            <button onClick={() => navigate(-1)} className="btn">
              Back to {SingleRecipe.fields.category.toLowerCase()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
