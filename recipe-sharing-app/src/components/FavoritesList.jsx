import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  // Get the favorite recipe IDs and map them to the recipe objects
  const favorites = useRecipeStore(state => 
    state.favorites.map(id => state.recipes.find(recipe => recipe.id === id))
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No favorites added yet!</p>
      )}
    </div>
  );
};

export default FavoritesList;
