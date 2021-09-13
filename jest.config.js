const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  preset: 'jest-expo',
  transform: {
    ...tsjPreset.transform,
    "\\.[jt]sx?$": "babel-jest",
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  'modulePathIgnorePatterns':[
    '__tests__/Component Tests/renderWithRedux.tsx'
  ],
  'transformIgnorePatterns':[
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)"
  ],
  cacheDirectory: '.jest/cache',
};