import babelJest from 'babel-jest';
import createBabelConfig from '../babel-config';
import { resolve } from 'path';
import { readJson } from '../webpack/webpack-base-config';

const babelrc = readJson(resolve(process.cwd(), '.babelrc')) || {};

module.exports = babelJest.createTransformer(
	Object.assign(
		createBabelConfig({ test: true }),
		babelrc
	)
);