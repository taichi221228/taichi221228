/**
 * @private
 * @type {import("stylelint").Config}
 */
// FIXME: Suppress TypeScript errors due to incompatibility between `eslint-plugin-import-access` and `tsc` when using `checkJS`.
// @ts-expect-error eslint-disable-line @typescript-eslint/ban-ts-comment
export default {
	extends: ["stylelint-config-standard", "./stylelint.config.order.js"],
};
