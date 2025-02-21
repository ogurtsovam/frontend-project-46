import globals from 'globals';
import pluginJs from '@eslint/js';
import fp from 'eslint-plugin-fp';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.jest,
      },
    },
    plugins: {
      fp,
    },
    rules: {
      'eol-last': ['error', 'always'],
      quotes: ['error', 'single'],
      'no-multi-spaces': 'error',
      'no-extra-semi': 'error',
      'space-before-function-paren': ['error', 'never'],
      'semi-spacing': ['error', { before: false, after: true }],
      'no-restricted-syntax': ['error', 'ForStatement'],
      'fp/no-loops': 'error',
      'fp/no-mutating-methods': 'error',
      'quote-props': ['error', 'as-needed'],
      indent: ['error', 2],
    },
  },
  pluginJs.configs.recommended,
];
