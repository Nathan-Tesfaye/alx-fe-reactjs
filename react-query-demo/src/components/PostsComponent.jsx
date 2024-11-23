import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}


const PostsComponent = () => {

  const { data: posts, isError, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading data</div>
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