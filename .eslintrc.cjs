module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: [
    '*.spec.ts',
    '*.test.ts',
    'vite.config.ts',
    'tailwind.config.cjs',
    '/__tests__/*',
    '/cypress/*',
  ],

  overrides: [
    {
      // react files config
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
      ],

      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },

      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            endOfLine: 'auto',
          },
        ],
        'react/jsx-filename-extension': [
          1,
          { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'react/function-component-definition': [
          2,
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],
      },
    },
    {
      extends: [
        'plugin:astro/all',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  ],
};
