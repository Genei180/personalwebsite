import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import rehypeAddLinkReload from './rehype-plugins/rehype-force-reload-links.js'
import rehypeMaxWidthMediaElements from './rehype-plugins/rehype-max-media-width.js'
import rehypeMermaid from 'rehype-mermaid';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), 
		mdsvex({ 
			extensions: ['.md'],
			remarkPlugins:
			[
				// remarkToc, { heading: 'Table of Contents', maxDepth: 3 }
			],
			rehypePlugins: [
				rehypeSlug, // Adds Anchors too Headings
				[ rehypeAutolinkHeadings,
				{
					behavior: 'wrap',
					properties: {
						className: ['heading-anchor'],
						ariaHidden: 'true'
					},
					content: {
						type: 'element',
						tagName: 'span',
						properties: { className: ['link-icon'] },
						children: [{ type: 'text', value: ''}] // '🔗'
					}
				}], //Adds Links to Headings
				rehypeAddLinkReload,
				rehypeMaxWidthMediaElements
				// [ rehypeMermaid,
				// {
				// 	strategy: 'inline-svg', // render to SVG at build time
				// 	// theme: 'dark',       // or 'dark', 'forest', etc.
				// }
				// ]
			]
		})],
	kit: { 
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter() },
		extensions: ['.svelte', '.md'],
};

export default config;
