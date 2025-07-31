// src/routes/blog/+page.server.ts
import type { PageServerLoad } from './$types';

const allPosts = import.meta.glob("./**/*.md", { base: '/src/content' });

export const load: PageServerLoad = async () => {
	// console.log(allPosts)

	const posts = await Promise.all(Object.entries(allPosts).map(async ([path, module]: any) => {
		const mod = await module();
		const slug = path; //.replace('.md', '');

		return {
			slug,
			...mod.metadata // this contains Markdown MetaData
		};
	}));

	// console.log(posts);

	return {
		posts
	};
};
