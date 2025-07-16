// src/routes/blog/+page.server.ts
import type { PageServerLoad } from './$types';

const allPosts = import.meta.glob("./*/Overview.md", { base: '/src/content/projects' });

export const load: PageServerLoad = async () => {
	const posts = await Promise.all(Object.entries(allPosts).map(async ([path, module]: any) => {
		const mod = await module();
		const slug = path;

		return {
			slug,
			...mod.metadata // this contains Markdown MetaData
		};
	}));

	return {
		posts
	};
};
