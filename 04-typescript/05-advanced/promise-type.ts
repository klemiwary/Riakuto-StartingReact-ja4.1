interface Post {
  id: number;
  userId: string;
  title: string;
  body: string;
}

async function fetchPost(id: string): Promise<Post> {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

type FetchPostResult = Awaited<ReturnType<typeof fetchPost>>;
