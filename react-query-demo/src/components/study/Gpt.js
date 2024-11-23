const addPost = async (newPost) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });

    if (!response.ok) {
      throw new Error('Failed to add post');
    }

    const data = await response.json();
    console.log('Post added:', data);
    return data;
  } catch (error) {
    console.error('Error adding post:', error);
  }
};

// Example usage
const newPost = {
  title: 'My New Post',
  body: 'This is the content of the new post.',
  userId: 1,
};

addPost(newPost);
