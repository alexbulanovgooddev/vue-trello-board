import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'
import globals from 'globals'

export default tseslint.config(
	{
		ignores: ['dist/**', 'node_modules/**']
	},

	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs['flat/recommended'],

	{
		files: ['**/*.vue'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser
			}
		}
	},

	{
		languageOptions: {
			globals: {
				...globals.browser
			}
		},
		rules: {
			'no-console': 'off',
			'no-debugger': 'warn',

			'@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
			'@typescript-eslint/no-explicit-any': 'warn',

			'vue/multi-word-component-names': 'off',
			'vue/no-v-html': 'off',
			'vue/require-default-prop': 'off',
			'vue/html-indent': ['error', 'tab'],
			'vue/html-self-closing': [
				'error',
				{
					html: { void: 'always', normal: 'always', component: 'always' },
					svg: 'always',
					math: 'always'
				}
			]
		}
	},
	prettier
)
