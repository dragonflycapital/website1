module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
	// add your custom rules here
	rules: {
	  // don't require .vue extension when importing
	  'import/extensions': ['error', 'always', {
		js: 'never',
		vue: 'ignorePackages',
	  }],
	  // allow optionalDependencies
	  'import/no-extraneous-dependencies': ['error', {
		optionalDependencies: ['test/unit/index.js'],
	  }],
	  // allow debugger during development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	  'func-names': 0,
	  'comma-spacing': 0,
	  'space-infix-ops': 0,
	  'space-before-function-paren': 0,
	  'arrow-spacing': [1,{ before: true,after: true }],
	  'prefer-arrow-callback': 0,
	  'space-before-blocks': 0,
	  indent: 0,
	  'no-unused-vars': 0,
	  'no-multi-spaces': 0,
	  'prefer-template': 0,
	  'no-tabs': 0,
	  'spaced-comment': 0,
	  'max-len': 0,
	  'no-mixed-spaces-and-tabs': 0,
	  'linebreak-style': 0,
	  'global-require': 0,
	  'import/no-dynamic-require': 0,

	  'no-undef': 0,
	  allowForLoopAfterthoughts: true,
	  'no-param-reassign': 0,
	  'no-plusplus': 0,
	  'no-underscore-dangle': ['error', { allow: ['__INITIAL_STATE__'] }],
	  'no-prototype-builtins': 0,
	},
};
