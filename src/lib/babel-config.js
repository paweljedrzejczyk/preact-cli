export default (env={}, options={}) => {
	const isProd = env && env.production;
	
	return {
		babelrc: false,
		presets: [
			[require.resolve('babel-preset-env'), {
				loose: env.test ? false : true,
				uglify: env.test ? false : true,
				modules: env.test ? 'commonjs' : options.modules || false,
				targets: env.test ? {
					node: 'current',
				} : {
					browsers: options.browsers,
				},
				exclude: [
					'transform-regenerator',
					'transform-es2015-typeof-symbol'
				]
			}],
			require.resolve('babel-preset-stage-1')
		],
		plugins: [
			require.resolve('babel-plugin-transform-object-assign'),
			require.resolve('babel-plugin-transform-decorators-legacy'),
			require.resolve('babel-plugin-transform-react-constant-elements'),
			isProd ? require.resolve('babel-plugin-transform-react-remove-prop-types') : null,
			[require.resolve('babel-plugin-transform-react-jsx'), { pragma: 'h' }],
			[require.resolve('babel-plugin-jsx-pragmatic'), {
				module: 'preact',
				export: 'h',
				import: 'h'
			}]
		].filter(Boolean)
	};
};
