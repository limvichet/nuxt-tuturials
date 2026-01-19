## install pnpm
> npm install -g pnpm 
or
> brew install pnpm

## install nuxt
> npx nuxi@latest init nuxt1
> choose > minimum setup for nuxt 4
> repository > no
> choose > pnpm
> chooe offcial modules
> font, image, icon ...

## go nuxt1 derectory
> cd nuxt1
> npm run dev

## install nuxt eslint module 
> https://eslint.nuxt.com/packages/module
> npx nuxi module add eslint
### Create .vscode\settings.json in nuxt1 directory
> go to .vscode/settings.json
```json
{
  // Required in vscode-eslint < v3.0.10 only
  "eslint.useFlatConfig": true
}
```
> goto package.json and past script
```json
{
  "scripts": {
    ...
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    ...
  },
}
```
> pnpm lint


## install tailwind nuxt
https://tailwindcss.com/docs/installation/framework-guides/nuxt
> pnpm -D add tailwindcss postcss autoprefixer
or
> npm install tailwindcss @tailwindcss/vite
...

## install nuxt shadcn vue
> https://www.shadcn-vue.com/docs/installation/nuxt
> pnpm dlx nuxi@latest module add shadcn-nuxt
