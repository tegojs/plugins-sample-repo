import { defineConfig } from 'taze'

export default defineConfig({
  recursive: true,
  // fetch latest package info from registry without cache
  force: true,
  // write to package.json
  write: true,
  // run `npm install` or `yarn install` right after bumping
  install: true,
  // ignore paths for looking for package.json in monorepo
  ignorePaths: [
    '**/node_modules/**',
    '**/plugins/**',
  ],
  // disable checking for "overrides" package.json field
  depFields: {
    overrides: false
  }
})
