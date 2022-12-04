module.exports = {
  createOldCatalogs: true,
  lexers: {
    js: ['JsxLexer'],
    default: ['JavascriptLexer'],
  },
  locales: ['fr', 'en'],
  namespaceSeparator: '.',
  output: 'web/src/locales/$LOCALE/$NAMESPACE.json',
  input: ['web/src/**/*.js', 'web/src/**/*.ts', 'web/src/**/*.tsx'],
}
