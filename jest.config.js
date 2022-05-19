module.exports = {
  roots: ['<rootDir>/src/__tests__'],
  testMatch: ['**/*.+(ts|js)', '**/?(*.)+(spec|test).+(ts|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
