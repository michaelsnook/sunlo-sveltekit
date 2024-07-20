import adapter from '@sveltejs/adapter-static'

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	compilerOptions: { runes: true },

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true,
		}),
		alias: {
			components: './src/components',
			'globals.css': './src/globals.css',
			images: './src/images',
			routes: './src/routes',
		},
	},
}

export default config
