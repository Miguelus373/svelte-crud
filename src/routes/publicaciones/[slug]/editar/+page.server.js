export async function load({ params }) {
	const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
	const json = await post.json();

	return {
		post: json
	};
}

import { redirect } from "@sveltejs/kit";

export const actions = {
	update: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id');
		const name = formData.get('nombre');
		const body = formData.get('cuerpo');
		
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			method: 'PUT',
			body: JSON.stringify({
				id: id,
				title: name,
				body: body,
				userId: 1
			}),
			headers: { 'Content-type': 'application/json' }
		});    

		const json = response.json();
		console.log(json);

    throw redirect (303 , `/publicaciones/${id}`) ;
	}
};