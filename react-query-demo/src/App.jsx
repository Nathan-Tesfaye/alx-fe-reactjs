import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";
// import { useState } from "react";

const queryClient = new QueryClient();



function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  )
}

export default App;



// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//     },
//   },
// });



// function App() {

//   const [demo, setDemo] = useState(true);

//   return (
//     <QueryClientProvider client={queryClient}>
//       <button onClick={() => setDemo(!demo)}>Toggle Posts</button>
//       {demo && <PostsComponent />}
//     </QueryClientProvider>
//   )
// }





