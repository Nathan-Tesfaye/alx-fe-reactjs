import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";


//function to fetch data from an API
const fetchData = async () => {
  const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log('fetched posts');
  return data;
};


//function to add(post) data to the API
const addData = async (newPost) => {
  const response = await fetch ('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  });

  const addedData = await response.json();
  return addedData;
};





//JSX component
const ReactQuery = () => {

  //to invalidate our query so we can refetch after adding(post) a new data to the API
  const queryClient = useQueryClient(); //passed from App.jsx as a context 

  //state for adding new data to the API
  const [title, setTitle] = useState ("");
  const [body, setBody] = useState("");


  const { data: posts, isLoading, isError } = useQuery({
    queryFn: () => fetchData(),
    queryKey: ["posts"],
    staleTime: 1000 * 60 * 5,  // Data is fresh for 5 minutes
    cacheTime: 1000 * 60 * 10, // Keep the cache for 10 minutes
  });

  const {mutateAsync: addPostMutation} = useMutation({
    mutationFn: addData,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    }
  });

  if (isLoading) {
    return <h2>Loading...</h2>  
  }

  if (isError) {
    return <div>Error Fetching Data</div>
  }

  const handleAddPost = async () => {
    const newPost = {
      title: title,
      body: body,
      userId: 10,
    };

    // Call the mutation to add the new post
    const addedPost = await addPostMutation(newPost);
    // console.log("Added Post:", addedPost);
  };


  return (
    <div>
      <div>
        <input type="text" name="text" id="text" onChange={(e) => setTitle(e.target.value)} value={title} />
        <textarea name="body" id="body" placeholder="Enter post content" onChange={(e) => setBody(e.target.value)} value={body} />
        <button onClick={handleAddPost}>Add Post</button>
      </div>
      {posts?.map( (post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ReactQuery;