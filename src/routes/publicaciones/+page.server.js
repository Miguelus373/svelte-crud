import { redirect } from "@sveltejs/kit";

export async function load() {
	const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
	const json = await posts.json();

	return {
		posts: json
	};
}

export const actions = {
	delete: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id');

		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			method: 'DELETE',
			headers: { 'Content-type': 'application/json' }
		});
    
    const json = response.json()

    console.log(json);
    
    throw redirect (303 , '/publicaciones') ;
	}
};
