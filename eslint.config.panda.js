// TODO: Type definition is not found.
// @ts-expect-error eslint-disable-line @typescript-eslint/ban-ts-comment
import pandaPlugin from "@pandacss/eslint-plugin";

/**
 * @package
 * @type {import("eslint").Linter.FlatConfig[]}
 */
export const pandaConfigs = [
	{
		// WARNING: This is not type-compatible with `FlatConfig`.
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		plugins: { "@pandacss": pandaPlugin },
		// WARNING: This is not type-compatible with `FlatConfig`.
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		rules: {
			// WARNING: This is not type-compatible with `FlatConfig`.
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			...pandaPlugin.configs.recommended.rules,
			"@pandacss/no-escape-hatch": "warn",
			"@pandacss/no-important": "warn",
			"@pandacss/no-physical-properties": "warn",
			"@pandacss/prefer-atomic-properties": "warn",
			"@pandacss/prefer-longhand-properties": "warn",
		},
	},
];
