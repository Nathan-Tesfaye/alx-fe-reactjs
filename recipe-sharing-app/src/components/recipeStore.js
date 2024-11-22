import { create } from "zustand";

export const useRecipeStore = create( set => ({
  recipes: [
    // {
    //   id: 1, title: 'chocolate cake', description: 'baking'
    // },
    // {
    //   id: 2, title: 'ice-cream', description: 'melt'
    // }
  ],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) => set(state => ({recipes: state.recipes.filter( (recipe) => recipe.id !== id)}))
}));

