/* eslint-disable import/no-extraneous-dependencies */
import { pathsToModuleNameMapper } from "ts-jest";

import { compilerOptions } from "./tsconfig.json";

export default {
  preset: "ts-jest",
  clearMocks: true,
  bail: true,
  coverageProvider: "v8",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/src/",
  }),
  testEnvironment: "node",
  testMatch: ["**/*.spec.ts"],
};
