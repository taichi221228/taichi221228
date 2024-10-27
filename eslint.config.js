import eslint from "@eslint/js";
// TODO: The latest `eslint-config-flat-gitignore` is not compatible with ESLint < v9. https://github.com/antfu/eslint-config-flat-gitignore/issues/11
import createIgnoreConfig from "eslint-config-flat-gitignore";
import globals from "globals";
import { config as defineConfig, configs } from "typescript-eslint";

import { importConfigs } from "./eslint.config.import.js";
import { nodeConfigs } from "./eslint.config.node.js";
import { qwikConfigs } from "./eslint.config.qwik.js";

const ignoreConfig = createIgnoreConfig();

/** @type import("eslint").Linter.FlatConfig */
const jsConfig = {
	...eslint.configs.recommended,
	rules: { "no-unused-vars": ["error", { argsIgnorePattern: "^_" }] },
};

/** @type import("typescript-eslint").ConfigWithExtends[] */
const tsConfigs = [
	...configs.recommendedTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
		},
	},
];

/** @type import("eslint").Linter.FlatConfig */
const basicConfig = {
	languageOptions: {
		globals: { ...globals.browser, ...globals.commonjs },
		ecmaVersion: "latest",
		sourceType: "module",
		parserOptions: { ecmaFeatures: { jsx: true } },
	},
};

/** @private */
// FIXME: Suppress TypeScript errors due to incompatibility between `eslint-plugin-import-access` and `tsc` when using `checkJS`.
// @ts-expect-error eslint-disable-line @typescript-eslint/ban-ts-comment
export default defineConfig(ignoreConfig, jsConfig, ...tsConfigs, basicConfig, ...importConfigs, ...nodeConfigs, ...qwikConfigs);
