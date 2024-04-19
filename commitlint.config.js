/** @type {import('@commitlint/types').UserConfig} */
export default {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"subject-case": [2, "always", "sentence-case"],
		"body-max-line-length": [2, "always", Number.POSITIVE_INFINITY],
	},
};
