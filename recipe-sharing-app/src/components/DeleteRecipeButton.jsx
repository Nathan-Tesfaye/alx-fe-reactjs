import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleDelete = () => {
    deleteRecipe(recipeId); // Delete the recipe

    // Redirect the user to the home page or another page after the deletion
    alert('Recipe deleted!');
    navigate('/'); // Navigate to the home page (or any other page you want)
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
