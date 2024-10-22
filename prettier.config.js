/**
 * @private
 * @type {import("prettier").Config}
 */
// HACK: Suppress TypeScript errors due to incompatibility between `eslint-plugin-import-access` and `tsc` when using `checkJS`.
// @ts-expect-error eslint-disable-line @typescript-eslint/ban-ts-comment
export default {
	printWidth: 160,
	plugins: ["prettier-plugin-scaffdog"] /* TODO: Fix the issue where this plugin doesn't load automatically */,
};
