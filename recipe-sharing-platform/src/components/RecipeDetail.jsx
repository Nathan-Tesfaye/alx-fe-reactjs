import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const Routes = 1

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch("/data.json"); //fetch recipe data
        if (!response.ok) {
          throw new Error("Failed to fetch recipe."); //throw in error incase fetching failed
        }

        const data = await response.json();
        const foundRecipe = data.find((item) => item.id === parseInt(id)); //pull data from the json file by matching the url id with recipe id

        setRecipe(foundRecipe);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <p>Loaidng rescipe...</p>;
  }

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div className="md:flex md:justify-center bg-slate-800 h-screen">
      <div className="flex flex-col items-center justify-center gap-5 md:pb-10 pt-10 md:w-auto text-white">
        <h1 className="text-2xl md:text-4xl font-bold">{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} />
        <ul className="text-center font-semibold md:text-lg">
          {recipe.ingredients.map((ingredient) => {
            return <li>{ingredient}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetail;
