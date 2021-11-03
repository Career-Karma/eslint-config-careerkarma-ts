module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript/base",
    "prettier",
  ],
  globals: {
    fetch: "readonly",
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  rules: {
    "import/prefer-default-export": "off",
    "prefer-promise-reject-errors": "off",
    "no-nested-ternary": "off",
    "no-unused-expressions": "off",
    "no-console": "off",
    "no-restricted-syntax": "off",
    "no-underscore-dangle": "off",
    "no-plusplus": "off",
    "arrow-parens": "off",
    "arrow-body-style": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.ts", "**/*.test.tsx", "tests/**/*.ts"]}]
  },
};
