module.exports = {
  src: [
    './src/index.ts',
  ],
  mode: 'file',
  includeDeclarations: true,
  tsconfig: 'tsconfig.json',
  out: './tutorial-output',
  excludePrivate: true,
  excludeProtected: true,
  excludeExternals: true,
  readme: 'README.md',
  name: 'javascript-documentation-examples-events-001',
  ignoreCompilerErrors: true,
  listInvalidSymbolLinks: true,
};
