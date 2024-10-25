// TODO: Type definition is not found
// @ts-expect-error eslint-disable-line @typescript-eslint/ban-ts-comment
import qwikPlugin from "eslint-plugin-qwik";

/**
 * @package
 * @type {import("eslint").Linter.FlatConfig[]}
 */
export const qwikConfigs = [
	// HACK: `eslint-plugin-qwik` does not provide recommended rule sets. https://github.com/QwikDev/qwik/issues/6048
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		// XXX: This is not type-compatible with `FlatConfig`.
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		plugins: { qwik: qwikPlugin },
		// XXX: This is not type-compatible with `FlatConfig`.
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
		rules: { ...qwikPlugin.configs.recommended.rules },
	},
];
