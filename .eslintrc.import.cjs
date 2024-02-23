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
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        pathGroups: [
          {
            group: "builtin",
            pattern: "@builder.io/{qwik,qwik-city}*{,/**}",
            position: "before",
          },
          {
            group: "sibling",
            pattern: "./**",
            position: "before",
          },
          {
            group: "parent",
            pattern: "~/**",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
  },
};
