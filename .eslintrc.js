module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    'nuxt',
    '@typescript-eslint',
  ],
  rules: {
    "@typescript-eslint/indent": ["error", 2],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    'prefer-const': 'off',
    'require-await': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-unused-components': 'off'
  },
};
