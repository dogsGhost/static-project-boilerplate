module.exports = {
	use: [
		'postcss-import',
		'postcss-cssnext',
		// 'postcss-uncss',
		'cssnano'
	],
	input: 'src/css/*.css',
	dir: 'dist/css',
	'local-plugins': true,
	'postcss-cssnext': {
		browsers: 'last 2 versions'
	},
	'postcss-uncss': {
		// check css selectors against these files
		html: ['dist/*.html'],
		// don't remove these selectors even if they can't be matched
		ignore: [
			'.no-js',
			// regex any selector using the `.open` class
			/\.open/
		]
	},
	'cssnano': {
		autoprefixer: false,
		discardComments: {
			removeAll: true
		},
		zindex: false
	}
};
