import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],  // List of all recipes
  favorites: [],  // List of favorite recipe IDs
  recommendations: [],  // List of recommended recipes

  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId],
  })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId),
  })),

  // Action to generate recipe recommendations based on favorites
  generateRecommendations: () => set(state => {
    // Example recommendation logic (adjust based on actual use case)
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5  // This is just a placeholder logic
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
