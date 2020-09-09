const { defaults } = require("jest-config");

module.exports = {
  ...defaults,
  clearMocks: true,
  testEnvironment: "node",
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
};
