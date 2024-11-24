// import Home from "./components/study/Home";
// import ProfilePages from "./components/study/ProfilePages";
// import NotFoundPage from "./components/study/NotFoundPage";
// import ProfilePage from "./components/study/ProfilePage";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";


import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
i


function App() {
  return (
    <Routes>
      <Switch>
        {/* Route for the Profile component */}
        <Route exact path="/" component={Profile} />
      </Switch>
    </Routes>
    
  )
}

export default App











// function App() {

//   const router = createBrowserRouter([{
//     path: '/',
//     element: <Home />,
//     errorElement: <NotFoundPage />,
//   },
//   {
//     path: '/profiles',
//     element: <ProfilePages />,
//     children: [
//       {
//         path: '/profiles/:profileId',
//         element: <ProfilePage />,
//       }, 
//     ],
//   },
  
// ]);

//   return (
    
//       <div>
//         <RouterProvider router={router} />
//       </div>

//   )
// }

// export default App
