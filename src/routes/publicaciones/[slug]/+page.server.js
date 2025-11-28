export async function load({ params }) {
	const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
	const json = await post.json();

	return {
		post: json
	};
}
