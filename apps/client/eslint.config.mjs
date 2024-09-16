import { getClientConfig } from '@monorepo/tools/eslint'

export default getClientConfig({
  tsconfigRootDir: import.meta.dirname,
})

// import eslint from '@eslint/js'
// import eslintConfigPrettier from 'eslint-config-prettier'
// import simpleImportSort from 'eslint-plugin-simple-import-sort'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import tseslint from 'typescript-eslint'

// export default tseslint.config(
//   {
//     ignores: ['dist'],
//   },
//   {
//     extends: [
//       eslint.configs.recommended,
//       ...tseslint.configs.recommended,
//       eslintConfigPrettier,
//     ],
//     files: ['**/*.{ts,tsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//       parserOptions: {
//         project: './tsconfig.json',
//         tsconfigRootDir: import.meta.dirname,
//       },
//     },
//     plugins: {
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//       'simple-import-sort': simpleImportSort,
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
//       ],
//       'simple-import-sort/imports': 'error',
//       'simple-import-sort/exports': 'error',
//     },
//   },
// )
