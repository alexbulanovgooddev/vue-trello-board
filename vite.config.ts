import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import pluginChecker from 'vite-plugin-checker'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	base: '/vue-trello-board/',
	plugins: [
		vue(),
		pluginChecker({
			eslint: {
				useFlatConfig: true,
				lintCommand: `eslint "${resolve(__dirname, 'src')}/**/*.{js,ts,jsx,tsx,vue}"`
			},
			stylelint: {
				lintCommand: `stylelint "${resolve(__dirname, 'src')}/**/*.{css,scss,vue}"`
			}
		}),
		tailwindcss()
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'~': fileURLToPath(new URL('./src', import.meta.url)),
			'@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
			'@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
			'@components': fileURLToPath(
				new URL('./src/components', import.meta.url)
			),
			'@composables': fileURLToPath(
				new URL('./src/composables', import.meta.url)
			)
		}
	}
})
