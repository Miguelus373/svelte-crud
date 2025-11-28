import { redirect } from "@sveltejs/kit";

export const actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('nombre');
		const body = formData.get('cuerpo');

		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				title: name,
				body: body,
				userId: 1
			}),
			headers: { 'Content-type': 'application/json' }
		});
    
    const json = response.json()

    console.log(json);
    
    throw redirect (303 , '/publicaciones/101') ;
	}
};
