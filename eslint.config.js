import typescriptPlugin from "@typescript-eslint/eslint-plugin"
import typescriptParser from "@typescript-eslint/parser"
import eslintCommentsPlugin from "eslint-plugin-eslint-comments"
import importPlugin from "eslint-plugin-import"
import pluginJsxA11y from "eslint-plugin-jsx-a11y"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import unusedImportsPlugin from "eslint-plugin-unused-imports"

export default [
  // global
  {
    ignores: ["dist", "eslint.config.js"],
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // @typescript-eslint/eslint-plugin
  {
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
    },
  },
  // eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-react-refresh
  {
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-var": "error",
      "no-unused-vars": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "react-refresh/only-export-components": "warn",
    },
  },
  // eslint-plugin-jsx-a11y
  {
    plugins: {
      "jsx-a11y": pluginJsxA11y,
    },
    rules: {
      ...pluginJsxA11y.configs.recommended.rules,
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-static-element-interactions": "off",
    },
  },
  // others
  {
    plugins: {
      import: importPlugin,
      "eslint-comments": eslintCommentsPlugin,
      "unused-imports": unusedImportsPlugin,
    },
    rules: {
      "eslint-comments/no-unused-disable": "error",
      "unused-imports/no-unused-imports": "warn",
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external"],
            ["internal"],
            ["parent", "sibling", "index"],
            ["type"],
            ["unknown"],
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "builtin",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "internal",
            },
            {
              pattern: "**/*.css",
              group: "unknown",
              position: "after",
            },
            {
              pattern: "**/context/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "import/newline-after-import": ["error", { count: 1 }],
    },
  },
]
