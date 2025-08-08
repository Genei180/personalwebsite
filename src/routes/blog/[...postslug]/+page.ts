const allPosts = import.meta.glob("./**/*.md",  { base: '/src/content/blog', eager: true });

export async function load({ params }) {
  const { postslug } = params;

  try {
	// Find All Files who are in Blog Folder
	const blogPosts = Object.entries(allPosts).find(([path]) =>
		path.includes(`${postslug}`)
	);

	if (!blogPosts) {
		throw new Error(`Post not found: ${postslug}`);
	}	
	const postModule = blogPosts[1];
	const postComponent = postModule.default;

	return { postslug, postComponent };
  } catch (e) {
	console.log(e)
    return {
      postslug: postslug,
      postComponent: null
    };
  }
}
