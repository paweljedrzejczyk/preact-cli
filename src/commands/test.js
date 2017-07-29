import path from 'path';
import asyncCommand from '../lib/async-command';
import jest from 'jest';
import createJestConfig from '../lib/jest/jest-config';
import { readJson } from '../lib/webpack/webpack-base-config';

process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

process.on('unhandledRejection', err => {
	throw err;
});

export default asyncCommand({
	command: 'test',
	
	desc: 'Run tests',
	
	builder: {},
	
	async handler(argv) {
		await test(argv);
	}
});

async function test(options) {
	const pkg = readJson(path.resolve(process.cwd(), 'package.json')) || {};
	
	const config = JSON.stringify(
		Object.assign(
			createJestConfig(),
			pkg.jest
		)
	);
	
	return new Promise(resolve => {
		jest.runCLI({ config: config }, [process.cwd()], resolve);
	});
}
