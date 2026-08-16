import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import pluginChecker from 'vite-plugin-checker'

export default defineConfig({
	plugins: [
		vue(),
		pluginChecker({
			eslint: {
				useFlatConfig: true,
				lintCommand: `eslint "${resolve(import.meta.dirname, 'src')}/**/*.{js,ts,jsx,tsx,vue}"`
			},
			stylelint: {
				lintCommand: `stylelint "${resolve(import.meta.dirname, 'src')}/**/*.{css,scss,vue}"`
			}
		})
	],
	resolve: {
		alias: {
			// vue: 'vue/dist/vue.esm-bundler.js',
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
