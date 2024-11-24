// import Home from "./components/study/Home";
// import ProfilePages from "./components/study/ProfilePages";
// import NotFoundPage from "./components/study/NotFoundPage";
// import ProfilePage from "./components/study/ProfilePage";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";


import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import BlogPost from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <Router>
      <Switch>
        {/* Route for the Profile component */}
        {/* <Route exact path="/" component={Profile} /> */}
        <Route path= "/blog/:id" Component={BlogPost}/>
        <ProtectedRoute path="/profile/:userId" component={Profile} />
        
      </Switch>
    </Router>
    
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
