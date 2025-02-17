import globals from 'globals';
import pluginJs from '@eslint/js';

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
    rules: {
      'eol-last': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-multi-spaces': 'error',
      'no-extra-semi': 'error',
      'space-before-function-paren': ['error', 'never'],
      'semi-spacing': ['error', { 'before': false, 'after': true }],
      'no-restricted-syntax': ['error', 'ForStatement'],
    },
  },
  pluginJs.configs.recommended,
];
