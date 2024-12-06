import HomePage from "./components/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



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


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/recipe/:id" element={<RecipeDetail />} />
//       </Routes>
//     </Router>
//   );
// }
