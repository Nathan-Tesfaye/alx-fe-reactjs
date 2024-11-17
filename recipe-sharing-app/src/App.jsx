import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';  // Import the FavoritesList
import RecommendationsList from './components/RecommendationsList';  // Import the RecommendationsList

function App() {
  return (
    <Router>
      <div>
        <SearchBar />  {/* Search bar for filtering recipes */}

        {/* Favorites and Recommendations sections */}
        <FavoritesList />
        <RecommendationsList />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <RecipeList />  {/* List of recipes */}
                <AddRecipeForm />
              </>
            }
          />
          <Route path="/recipe" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
