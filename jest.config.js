const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  cacheDirectory: '.jest/cache',
  preset: 'jest-expo',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  'modulePathIgnorePatterns':[
    '__tests__/renderWithRedux.tsx',
    '__tests__/mock.ts',
  ],
  'setupFiles':[
    './src/__tests__/mock.ts'
  ],
  transform: {
    ...tsjPreset.transform,
    "\\.[jt]sx?$": "babel-jest",
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  'transformIgnorePatterns':[
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)"
  ],
};