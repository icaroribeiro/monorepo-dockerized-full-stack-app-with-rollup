import type { ConfigWithExtends } from "typescript-eslint";
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

const ignore: ConfigWithExtends = {
	name: "ignore",
	ignores: [
		"node_modules",
		"dist",
		"eslint.config.mjs",
		"prettier.config.mjs",
		"vite.config.ts",
	],
};

type TSConfigArgs = {
	tsconfigRootDir: string;
};

const tsConfig = ({ tsconfigRootDir }: TSConfigArgs): ConfigWithExtends => ({
	name: "typescript-linter",
	plugins: {
		"@typescript-eslint": tseslint.plugin,
	},
	languageOptions: {
		parser: tseslint.parser,
		parserOptions: {
			// projectService: true,
			project: "./tsconfig.json",
			tsconfigRootDir: tsconfigRootDir,
		},
	},
});

const simpleImportSortConfig: ConfigWithExtends = {
	name: "simple-import-sort",
	plugins: {
		"simple-import-sort": simpleImportSort,
	},
	rules: {
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
	},
};

// const consistentTypesConfig: ConfigWithExtends = {
// 	rules: {
// 		"@typescript-eslint/consistent-type-definitions": ["error", "type"],
// 	},
// };

const getConfig = (tsConfigArgs: TSConfigArgs) =>
	tseslint.config(
		ignore,
		tsConfig(tsConfigArgs),
		eslint.configs.recommended,
		...tseslint.configs.recommended,
		simpleImportSortConfig,
		// consistentTypesConfig,
		eslintConfigPrettier
	);

export { getConfig };
