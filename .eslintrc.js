module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  plugins: ['react'],
  rules: {
    'no-extra-boolean-cast': 0,
    'no-unneeded-ternary': 0,

    '@typescript-eslint/no-confusing-void-expression': 0,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/consistent-type-assertions': 0,
    '@typescript-eslint/ban-tslint-comment': 0,
    '@typescript-eslint/triple-slash-reference': 0,

    'react/display-name': 0,
    'react/react-in-jsx-scope': 0,

    'prettier/prettier': [
      'error',
      {
        singleAttributePerLine: true,
        endOfLine: 'auto',
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
        printWidth: 90,
      },
    ],
  },
}
