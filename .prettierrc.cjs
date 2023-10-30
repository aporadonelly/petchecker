module.exports = {
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'always',
  printWidth: 100,

  importOrder: [
    '^react',
    '^\\w',
    '/types/',
    '/hooks/',
    '/store/',
    '/views/',
    '/components/',
    '/assets/',
    '^./',
    'css$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
