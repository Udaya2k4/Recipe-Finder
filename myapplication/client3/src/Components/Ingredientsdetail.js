
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Ingredientsdetail() {
  const { name } = useParams();
  const [recipe, setRecipe] = useState(null);

  const fetchRecipe = async () => {
    try {
      const res = await fetch(`http://localhost:4000/recipes`);
      const data = await res.json();
      const match = data.find(r => r.name.toLowerCase() === name.toLowerCase());
      setRecipe(match);
    } catch (err) {
      console.error("Error loading recipe:", err);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Ingredients for {name}</h2>
      <button onClick={fetchRecipe}>Load Details</button>

      {recipe && (
        <div style={{ padding: "20px" }}>
          <img src={`/images/${recipe.image}`} width="250px" height="250px" alt={recipe.name} />
          <h3>Ingredients:</h3>
          <p>{recipe.ingredients}</p>
          <h3>Steps:</h3>
          <p>{recipe.steps}</p>
        </div>
      )}
    </div>
  );
}

export default Ingredientsdetail;
