module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['airbnb-base', 'prettier'],
	parserOptions: {
		ecmaVersion: 13,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	overrides: [
		{
			files: '**/*.+(ts|tsx)',
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: 'tsconfig.json',
				plugins: ['@typescript-eslint'],
				extends: ['plugin:@typescript-eslint/recommended'],
			},
		},
	],
	rules: {},
};
