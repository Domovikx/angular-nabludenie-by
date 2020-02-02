module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'airbnb-base',
    'angular',
    'plugin:angular/johnpapa',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: '.'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'object-curly-newline': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'comma-dangle': 0,
    'linebreak-style': 0,
    'no-useless-constructor': 0,
    'lines-between-class-members': 0,
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            ignoredMethodNames: [
              'ngOnChanges',
              'ngOnInit',
              'ngDoCheck',
              'ngAfterContentInit',
              'ngAfterContentChecked',
              'ngAfterViewInit',
              'ngAfterViewChecked',
              'ngOnDestroy'
            ],
            overrides: {
              constructors: 'off'
            }
          }
        ]
      }
    }
  ]
};
