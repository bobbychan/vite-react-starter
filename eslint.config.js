import eslint from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import jsoncParser from 'jsonc-eslint-parser'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierRecommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    ignores: ['dist/*', '*.config.js'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      parser: tsParser,
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
    },
  },
  {
    files: ['*.json'],
    languageOptions: {
      parser: jsoncParser,
    },
    rules: {},
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      react: reactPlugin,
      'react-refresh': reactRefresh,
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactPlugin.configs['recommended'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
  },
]
