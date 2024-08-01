import type { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
    dir: './',
})

const customJestConfig: Config = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    moduleDirectories: ['node_modules', '<rootDir>/'],
}

export default createJestConfig(customJestConfig)
