# React Router 5 to 6 migration tests harness example

Test harness example for react router 5 migration to react router 6 written in TypeScript, using vitest or jest.

[Look at for an example of a test harness to migrate regex path from react router 5](./src/routes.test.tsx)

Goal of the harness is to test your routing logic and to make sure that your routes are working as expected when you migrate to react router 6 which doesn't support regex.

## Installation

```bash
fnm use
corepack enable pnpm
pnpm install
```

## Run

```bash
pnpm dev
```

## Test

```bash
pnpm test
```
