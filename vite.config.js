import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteSentry from 'vite-plugin-sentry';
import dotenv from 'dotenv';
dotenv.config({
	path: fileURLToPath(new URL('.env.local', import.meta.url)),
});

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),

		ViteSentry({
			token: process.env.SENTRY_AUTH_TOKEN,
			org: 'yap-yee-qiang',
			project: 'learn-sentry',
			release: `${process.env.npm_package_name}@${process.env.npm_package_version}`,
			setCommits: {},
			sourceMaps: {
				include: ['./dist/assets'],
				ignore: ['node_modules'],
				urlPrefix: '~/assets',
			},
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	build: {
		sourcemap: 'hidden',
	},
	define: {
		__SENTRY_RELEASE__: `"${process.env.npm_package_name}@${process.env.npm_package_version}"`,
	},
});
