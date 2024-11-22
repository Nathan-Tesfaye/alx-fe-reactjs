import RecipeList  from "./components/RecipeList";
import AddRecipeForm  from "./components/AddRecipeForm";
import Delete from "./components/Delete";

function App() {
  

  return (
    <>
      <div>
        <RecipeList />
        <AddRecipeForm />
        <Delete />
      </div>
    </>
  )
}

export default App
