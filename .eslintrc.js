module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'script',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  plugins: ['@typescript-eslint'],
  extends: ['prettier', 'eslint:recommended'],
  rules: {
    'space-before-function-paren': ['error', 'never'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'no-unneeded-ternary': 'off',
    'no-throw-literal': 'off',
    semi: ['error', 'always'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    curly: ['error', 'multi'],
    'arrow-parens': ['error', 'always'],
    indent: 'off'
  }
};
