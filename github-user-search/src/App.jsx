import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from "./components/Search";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Search />
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App
