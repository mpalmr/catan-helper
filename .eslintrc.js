module.exports = {
	root: true,
	env: { node: true },
	extends: [
		'plugin:vue/essential',
		'@vue/airbnb',
	],
	parserOptions: { parser: 'babel-eslint' },
	rules: {
		indent: [2, 'tab'],
		'no-tabs': 0,
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'import/prefer-default-export': 0,
		'prefer-destructuring': 0,
	},
	overrides: [
		{
			files: ['**/__tests__/*.spec.js'],
			env: { jest: true },
		},
		{
			files: [
				'babel.config.js',
				'vue.config.js',
				'jest.config.js',
			],
			parserOptions: { sourceType: 'script' },
		},
	],
};
