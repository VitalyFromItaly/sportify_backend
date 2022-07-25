module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'node/no-path-concat': 'off',
    'node/handle-callback-err': 'off',
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": ["error"],
    'node/no-callback-literal': 'off',
    "comma-dangle": ["error", "never"],
    // or
    // "comma-dangle": ["error", {
    //     "arrays": "never",
    //     "objects": "always",
    //     "imports": "never",
    //     "exports": "never",
    //     "functions": "never"
    // }],
    'node/no-exports-assign': 'off',
    'node/no-new-require': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', 'never'],
    'semi': 'off',
    'camelcase': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    'no-useless-constructor': 'off',
    'no-console':  'off',
    'no-debugger': 'off',
    quotes: [
      'warn',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'no-tabs': [
      'error',
      {
        allowIndentationTabs: true
      }
    ]
  },
};
