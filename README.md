# TypeScript Next.js example

This is a really simple project that shows the usage of Next.js with TypeScript.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-typescript)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-typescript&project-name=with-typescript&repository-name=with-typescript)

## How to use it?

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-typescript with-typescript-app
# or
yarn create next-app --example with-typescript with-typescript-app
# or
pnpm create next-app --example with-typescript with-typescript-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

This example shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript.

```
npm install --save-dev typescript
```

To enable TypeScript's features, we install the type declarations for React and Node.

```
npm install --save-dev @types/react @types/react-dom @types/node
```

When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.

## Bit install

```
bit init
```

## Bit settings 

* set bit cloud scope

```
diff -u workspace.jsonc workspace.jsonc.after
--- workspace.jsonc	2022-07-10 15:02:28.000000000 +0900
+++ workspace.jsonc.after	2022-07-10 15:07:59.000000000 +0900
@@ -27,7 +27,7 @@
     /**
      * default scope for all components in workspace.
      **/
-    "defaultScope": "my-scope"
+    "defaultScope": "thirosue.my-scope" ### <------------ modify
   },
   /**
    * main configuration for component dependency resolution.
```

https://github.com/Thirosue/bit-sample-2022/commit/72ad4a74200de2abd21a89a79da0c7152977912d#diff-2a06d80763063354400c5849161247b69496304dabcc553538efde2df2b71934

## Install Tailwind CSS

https://tailwindcss.com/docs/installation

### build

```
npx tailwindcss -i ./input.css -o ./styles.css --watch
```

## Add Component Library

### make boilerplate

```
bit create react ui/button
```

### add test dependency

```
yarn add -D @testing-library/react@12.1.5 @types/jest @types/mocha
```

### complie & link 

```
bit compile && bit link
```

```
bit tag --all 0.0.1
```

```
% bit show ui/button
┌───────────────────┬────────────────────────────────────────────────────────────┐
│ id                │ thirosue.my-scope/ui/button@0.0.1                          │
├───────────────────┼────────────────────────────────────────────────────────────┤
│ scope             │ thirosue.my-scope                                          │
├───────────────────┼────────────────────────────────────────────────────────────┤
│ name              │ ui/button                                                  │
├───────────────────┼────────────────────────────────────────────────────────────┤
│ env               │ teambit.react/react                                        │
├───────────────────┼────────────────────────────────────────────────────────────┤
│ package name      │ @thirosue/my-scope.ui.button                               │
├───────────────────┼────────────────────────────────────────────────────────────┤
│ deprecated        │ false                                                      │
├───────────────────┼────────────────────────────────────────────────────────────┤
│ main file         │ index.ts                                                   │
├───────────────────┼────────────────────────────────────────────────────────────┤
│ files             │ button.composition.tsx                                     │
│                   │ button.docs.mdx                                            │
│                   │ button.spec.tsx                                            │
│                   │ button.tsx                                                 │
│                   │ index.ts                                                   │
├───────────────────┼────────────────────────────────────────────────────────────┤
│ dev files         │ button.spec.tsx (teambit.defender/tester)                  │
│                   │ button.composition.tsx (teambit.compositions/compositions) │
│                   │ button.docs.mdx (teambit.docs/docs)                        │
├───────────────────┼────────────────────────────────────────────────────────────┤
│ aspects           │ teambit.envs/envs                                          │
│                   │ teambit.react/react                                        │
│                   │ teambit.compilation/compiler                               │
│                   │ teambit.component/dev-files                                │
│                   │ teambit.compositions/compositions                          │
│                   │ teambit.pkg/pkg                                            │
│                   │ teambit.docs/docs                                          │
│                   │ teambit.dependencies/dependency-resolver                   │
│                   │ teambit.pipelines/builder                                  │
│                   │ teambit.compilation/compiler                               │
├───────────────────┼────────────────────────────────────────────────────────────┤
│ dependencies      │ core-js@^3.0.0- (package)                                  │
├───────────────────┼────────────────────────────────────────────────────────────┤
│ dev dependencies  │ @types/react@^17.0.8------------------- (package)          │
│                   │ @testing-library/react@12.1.5---------- (package)          │
│                   │ @types/testing-library__jest-dom@5.9.5- (package)          │
│                   │ @babel/runtime@7.12.18----------------- (package)          │
│                   │ @types/jest@^26.0.0-------------------- (package)          │
│                   │ @types/react-dom@^17.0.5--------------- (package)          │
│                   │ @types/node@12.20.4-------------------- (package)          │
├───────────────────┼────────────────────────────────────────────────────────────┤
│ peer dependencies │ react-dom@^16.8.0 || ^17.0.0- (package)                    │
│                   │ react@^16.8.0 || ^17.0.0----- (package)                    │
└───────────────────┴────────────────────────────────────────────────────────────┘
```

## export

```
bit export --all
```

### Add Card component

```
bit create react ui/card
```

```
bit compile && bit link
```

```
bit tag ui/card@0.0.1
```

```
bit export ui/card@0.0.1
```