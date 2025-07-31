const allPosts = import.meta.glob("$content/blog/**/*.md", { eager: true });

export async function load({ params }) {
  const { postslug } = params;

  try {
	// Find post whose path ends with the slug
	const match = Object.entries(allPosts).find(([path]) =>
		path.endsWith(`blog/${postslug}`)
	);

	if (!match) {
		throw new Error(`Post not found: ${postslug}`);
	}

	const postModule = match[1]; // already eager-loaded
	const postComponent = postModule.default;

	console.log(postModule)
	console.log(postComponent)

	return { postslug, postComponent };
  } catch (e) {
	console.log(e)
    return {
      postslug,
      postComponent: null
    };
  }
}
