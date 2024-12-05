import { useEffect, useState } from "react";

import React from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]); // State to store recipe data
  const [loading, setLoading] = useState(true); //state to store loading statur

  useEffect(() => {
    const fetchData = async () => {
      //async fun
      try {
        const response = await fetch("/data.json"); //fetch data
        if (!response.ok) {
          throw new Error("Failed to load recipe data.");
        }
        const data = await response.json();
        setRecipes(data); //store data in recipes state
      } catch (error) {
        console.error("Error fetching recipe data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(recipes);

  return (
    <div className="p-8 ">
      <h1 className="text-4xl text-center pb-8">Recipes</h1>
      <div className="flex flex-col items-center md:gap-28  md:flex-row md:justify-center md:items-center">
        {recipes.map((recipe) => {
          return (
            <div>
              <div className="flex flex-col bg-slate-200 items-center gap-3 w-56 lg:min-w-96 mb-10">
                <img src={recipe.image} alt="Food pic" className="p-6 rounded-full" />
                <h3 className="text-xl font-bold">{recipe.title}</h3>
                <p className="text-center pb-6 px-2">{recipe.summary}</p>
                <button className="bg-purple-500 font-semibold px-5 py-3 mb-10 rounded-full shadow-lg hover:bg-purple-300">Details</button>
            </div>
                
              <div className="flex flex-col bg-slate-200 items-center gap-3 w-56 lg:min-w-96 mb-10">
                <img src={recipe.image} alt="Food pic" className="p-6 rounded-full" />
                <h3 className="text-xl font-bold">{recipe.title}</h3>
                <p className="text-center pb-6 px-2">{recipe.summary}</p>
                <button className="bg-purple-500 font-semibold px-5 py-3 mb-10 rounded-full shadow-lg hover:bg-purple-300">Details</button>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
