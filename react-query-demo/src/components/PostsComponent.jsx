import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}


const PostsComponent = () => {

  const { data: posts, isError, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 5,  // Data is fresh for 5 minutes
    cacheTime: 1000 * 60 * 10, // Keep the cache for 10 minutes
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>fetchPosts</div>
  }

  return (
    <div>
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

export default PostsComponent;