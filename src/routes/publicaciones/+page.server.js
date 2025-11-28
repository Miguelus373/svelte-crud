export async function load() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await posts.json();
  
  return {
    posts: json
  }
};

export const actions = {
  create: async ({request}) => {
    const formData = await request.formData();
  }
}