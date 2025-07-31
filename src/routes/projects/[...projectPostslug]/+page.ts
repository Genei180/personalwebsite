const allPosts = import.meta.glob("./**/*.md",  { base: '/src/content/projects', eager: true });

export async function load({ params }) {
  const { projectPostslug } = params;

  try {
	// Find All Files who are in Project Folder
	const postInProject = Object.entries(allPosts).find(([path]) =>
		path.includes(`${projectPostslug}`)
	);

	if (!postInProject) {
		throw new Error(`Post not found: ${projectPostslug}`);
	}	
	const postModule = postInProject[1];
	const postComponent = postModule.default;

	const project = projectPostslug.split("/")[0]
	// Find All Files who are in Project Folder
	const filesInProject = Object.entries(allPosts).filter(([path]) =>
		path.includes(`/${project}/`)
	);

	return { filesInProject, postslug: projectPostslug, postComponent };
  } catch (e) {
	console.log(e)
    return {
      postslug: projectPostslug,
      postComponent: null
    };
  }
}
