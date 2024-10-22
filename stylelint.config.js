/**
 * @private
 * @type {import("stylelint").Config}
 */
// HACK: Suppress TypeScript errors due to incompatibility between `eslint-plugin-import-access` and `tsc` when using `checkJS`.
// @ts-expect-error eslint-disable-line @typescript-eslint/ban-ts-comment
export default {
	extends: ["stylelint-config-standard", "./stylelint.config.order.js"],
};
