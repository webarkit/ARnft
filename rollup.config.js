
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import externalGlobals from "rollup-plugin-external-globals";
import { terser } from "rollup-plugin-terser";
export default {
	input: 'src/ARnft.ts', // our source file
	output: [
		{
			//umd
			format: 'umd',
			name: 'ARNFT',
			file: 'dist/ARnft.js',
			sourcemap: true
		}
	],
	plugins: [
		typescript({
			tsconfig: "tsconfig.json",
			typescript: require('typescript'),
		}),
		json(),
		nodeResolve(),
		terser() // minifies generated bundles
	]
};
