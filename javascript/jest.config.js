// CommonJS format
module.exports = {
    verbose: true,
    testEnvironment: 'node',
    transform: {
      '^.+\\.[tj]sx?$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/'],
    // If needed for imports like './file.js' → './file':
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1',
    },
  };
  