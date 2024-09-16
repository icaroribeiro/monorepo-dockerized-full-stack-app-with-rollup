import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";
const ignoreConfig = {
  name: "ignore",
  ignores: [
    "node_modules",
    "dist",
    "eslint.config.mjs",
    "prettier.config.mjs",
    "vite.config.ts"
  ]
};
const tsConfig = ({ tsconfigRootDir }) => ({
  name: "typescript-linter",
  plugins: {
    "@typescript-eslint": tseslint.plugin
  },
  files: ["**/*.ts"],
  languageOptions: {
    // parser: tseslint.parser,
    parserOptions: {
      // projectService: true,
      project: "./tsconfig.json",
      tsconfigRootDir
    }
  }
});
const tsBrowserConfig = ({
  tsconfigRootDir
}) => ({
  name: "typescript-linter",
  plugins: {
    "@typescript-eslint": tseslint.plugin
  },
  files: ["**/*.{ts,tsx}"],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    // parser: tseslint.parser,
    parserOptions: {
      // projectService: true,
      project: "./tsconfig.json",
      tsconfigRootDir
    }
  }
});
const reactHookConfig = {
  name: "react-hook",
  plugins: {
    "react-hooks": reactHooks
  },
  rules: {
    ...reactHooks.configs.recommended.rules
  }
};
const reactRefreshConfig = {
  name: "react-refresh",
  plugins: {
    "react-refresh": reactRefresh
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ]
  }
};
const simpleImportSortConfig = {
  name: "simple-import-sort",
  plugins: {
    "simple-import-sort": simpleImportSort
  },
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  }
};
const getServerConfig = (tsConfigArgs) => tseslint.config(
  ignoreConfig,
  tsConfig(tsConfigArgs),
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  simpleImportSortConfig,
  // consistentTypesConfig,
  eslintConfigPrettier
);
const getClientConfig = (tsConfigArgs) => tseslint.config(
  ignoreConfig,
  tsBrowserConfig(tsConfigArgs),
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  reactHookConfig,
  reactRefreshConfig,
  simpleImportSortConfig,
  // consistentTypesConfig,
  eslintConfigPrettier
);
export {
  getClientConfig,
  getServerConfig
};
