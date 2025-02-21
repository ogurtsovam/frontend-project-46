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
    plugins: {fp,},
    rules: {
      indent: ['error', 2],
      'object-curly-newline': ['error', { multiline: true, minProperties: 6 }],
      'no-trailing-spaces': 'error',
      'spaced-comment': ['error', 'always'],
      'no-multi-spaces': 'error',
      semi: ['error', 'always'],
      'comma-spacing': ['error', { before: false, after: true }],
      'eol-last': ['error', 'always'],
      'padded-blocks': ['error', 'never'],
      quotes: ['error', 'single'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'fp/no-loops': 'error',
      'fp/no-mutating-methods': 'error',
    }
  },
  pluginJs.configs.recommended,
];
