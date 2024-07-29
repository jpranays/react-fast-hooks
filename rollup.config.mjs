import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";
import cleanup from "rollup-plugin-cleanup";
import del from 'rollup-plugin-delete';

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: "dist/index.cjs.js",
				format: "cjs",
				sourcemap: false,
			},
			{
				file: "dist/index.esm.js",
				format: "esm",
				sourcemap: false,
			},
		],
		external: ["react"],
		plugins: [
			resolve(),
			commonjs(),
			typescript({
				tsconfig: "./tsconfig.json",
				outputToFilesystem: true,
			}),
			terser(),
		],
	},
	{
		input: "./dist/types/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "es" }],
		plugins: [dts(), cleanup(), del({ targets: "dist/types", runOnce: true })],
	},
];
