import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base: './',
	css: { 
		preprocessorOptions: {
			scss: { api: 'modern' }
		}
	},
	plugins: [sveltekit()]
});
