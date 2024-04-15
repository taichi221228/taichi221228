module.exports = {
	plugins: {},
	filters: {},
	rules: {
		"textlint-rule-alive-link": false, // TODO: It's too slow, it's just a temporary solution.
		"@textlint-rule/no-unmatched-pair": true,
		"textlint-rule-no-zero-width-spaces": true,
		"textlint-rule-doubled-spaces": true,
		"@textlint-rule/textlint-rule-no-duplicate-abbr": true,
		"textlint-rule-alex": true,
		"textlint-rule-apostrophe": true,
		"textlint-rule-diacritics": true,
		"textlint-rule-en-capitalization": true,
		"preset-japanese": {
			"sentence-length": false,
		},
		"preset-ja-spacing": true,
		"preset-jtf-style": true,
	},
};
