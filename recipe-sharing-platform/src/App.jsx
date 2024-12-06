import HomePage from "./components/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/recipe/:id",
    element: <RecipeDetail />,
  },
]);



function App() {
  
  return <RouterProvider router={router} />;
}

export default App;
