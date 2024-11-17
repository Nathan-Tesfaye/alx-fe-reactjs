import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div>
        {/* Define routes for different components */}
        <Routes>
          {/* Home route showing the recipe list and form */}
          <Route
            path="/"
            element={
              <>
                <RecipeList />
                <AddRecipeForm />
              </>
            }
          />

          {/* Route for recipe details */}
          <Route
            path="/recipe"
            element={<RecipeDetails />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
