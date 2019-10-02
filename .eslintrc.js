module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  plugins: ['babel'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: 'eslint:recommended',
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', {
      ignoreTemplateLiterals: true,
      code: 120
    }],
    'no-console': 'off',
    indent: ['error', 2, {
      SwitchCase: 1
    }],
    quotes: ['error', 'single', {
      avoidEscape: true
    }],
    semi: ['error', 'always'],
  },
};
