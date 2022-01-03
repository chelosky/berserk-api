module.exports = {
    roots: ['<rootDir>'],
    testMatch: ['**/__tests__/**/*.+(ts)', '**/?(*.)+(spec|test).+(ts)'],
    transform: {
        '^.+\\.(ts)$': 'ts-jest',
    },
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts'],
    coveragePathIgnorePatterns: [
        '<rootDir>/node_modules/'
    ],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules'
    ],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json'
        }
    },
    moduleDirectories: ['<rootDir>/node_modules', '<rootDir>']
}