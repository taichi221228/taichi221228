module.exports = {
  extends: ["plugin:import/recommended"],
  plugins: ["import"],
  rules: {
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
        groups: [
          "builtin",
          "external",
          "internal",
          ["sibling", "parent"],
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        pathGroups: [
          {
            group: "builtin",
            pattern: "@builder.io/qwik?(-city)**",
          },
          {
            group: "external",
            pattern: "@qwik?(-city)**",
          },
          {
            group: "internal",
            pattern: "~/**",
          },
          {
            group: "sibling",
            pattern: "./**",
          },
          {
            group: "parent",
            pattern: "../**",
          },
        ],
        pathGroupsExcludedImportTypes: [],
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: true,
    },
  },
};
