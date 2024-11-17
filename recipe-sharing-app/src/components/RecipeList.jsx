import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  // Get the filtered recipes from the store
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <Link to="/recipe" state={{ recipeId: recipe.id }}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
