export default () => {
	return {
		collectCoverageFrom: ['src/**/*.{js,jsx}'],
		testMatch: [
			'<rootDir>/src/**/__tests__/**/*.js?(x)',
			'<rootDir>/src/**/?(*.)(spec|test).js?(x)',
		],
		transform: {
			'^.+\\.(js|jsx)$': require.resolve('./babel-transform.js'),
			'^.+\\.css$': require.resolve('./css-transform.js'),
			'^(?!.*\\.(js|jsx|css|json)$)': require.resolve('./file-transform.js'),
		},
		moduleNameMapper: {
			'^react$': 'preact-compat',
			'^react-dom$': 'preact-compat',
			'^create-react-class$': 'preact-compat/lib/create-react-class',
			'^react-addons-css-transition-group$': 'preact-css-transition-group',
			'^preact-cli/async-component$': require.resolve('../../components/async.js'),
		},
		moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'less', 'scss', 'sass', 'styl', 'css'],
	};
}
