module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: './coverage',
  roots: ['<rootDir>/src'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      babelConfig: false,
    },
  },
  preset: 'ts-jest/presets/js-with-ts',
};
