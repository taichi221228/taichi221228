# Taichi221228 :boom:

![Capture of top page](https://raw.githubusercontent.com/taichi221228/taichi221228/master/assets/main-visual.jpeg)

Welcome! This repository serves as the home for my portfolio site, taichi221228, a living document of my journey and growth in the tech world. Here, I showcase my technical articles, projects, and the evolving story of my professional development. Explore my world of coding, learning, and creative solutions!

---

## Note :construction:

This repository is still a work in progress. Some sections may be incomplete as I continue to develop and update the content. Thank you for your understanding!

## Structure

This project is using Qwik with [QwikCity](https://qwik.dev/). QwikCity is an extra set of tools on top of Qwik that enhances the ease of building a full site, including directory-based routing, layouts, and more.

Inside your project, you’ll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory-based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.dev/docs/routing/) for more info.

- `src/components`: Recommended directory for components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Stack

| Name                                                                | Type        |                |
| ------------------------------------------------------------------- | ----------- | -------------- |
| [Bun](https://bun.sh/)                                              | Core        |                |
| [Qwik](https://qwik.dev/)                                           | Core        |                |
| [QwikCity](https://qwik.dev/)                                       | Core        |                |
| [React](https://react.dev/)                                         | UI          | :construction: |
| [ElysiaJS](https://elysiajs.com/)                                   | Middleware  | :construction: |
| [Markdown](https://www.markdownguide.org/)                          | Content     | :construction: |
| Zenn/Qiita/Dev.to                                                   | Content     | :construction: |
| [CSS Modules](https://github.com/css-modules/css-modules/)          | Styling     |                |
| [Happy CSS Modules](https://github.com/mizdra/happy-css-modules/)   | Styling     | :construction: |
| [Remix Icon](https://remixicon.com/)                                | Styling     |                |
| [Fontsource](https://fontsource.org/)                               | Styling     |                |
| [Shiki](https://shiki.style/)                                       | Styling     |                |
| [Partytown](https://partytown.builder.io/)                          | Performance | :construction: |
| [Vite](https://vitejs.dev/)                                         | Toolchain   |                |
| [esbuild](https://esbuild.github.io/)                               | Toolchain   |                |
| [Rollup](https://rollupjs.org/)                                     | Toolchain   |                |
| [TypeScript](https://www.typescriptlang.org/)                       | Quality     |                |
| [ESLint](https://eslint.org/)                                       | Quality     |                |
| [Stylelint](https://stylelint.io/)                                  | Quality     |                |
| [textlint](https://textlint.github.io/)                             | Quality     |                |
| [markdownlint](https://github.com/DavidAnson/markdownlint/)         | Quality     | :construction: |
| [commitlint](https://github.com/conventional-changelog/commitlint/) | Quality     |                |
| [EditorConfig](https://editorconfig.org/)                           | Quality     |                |
| [Prettier](https://prettier.io/)                                    | Quality     |                |
| [Biome](https://biomejs.dev/)                                       | Quality     |                |
| [Husky](https://typicode.github.io/husky/)                          | Quality     |                |
| [scaffdog](https://scaff.dog/)                                      | Quality     |                |
| [Vitest](https://vitest.dev/)                                       | Testing     | :construction: |
| [Storybook](https://storybook.js.org/)                              | Testing     | :construction: |
| [Playwright](https://playwright.dev/)                               | Testing     | :construction: |
| [BrowserStack](https://www.browserstack.com/)                       | Testing     | :construction: |
| [Cloudflare](https://www.cloudflare.com/)                           | Hosting     | :construction: |
| [Nx](https://nx.dev/)                                               | Workspace   | :construction: |
| [Figma](https://www.figma.com/)                                     | Design      |                |

## Development

Development mode uses [Vite’s development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
bun start # or `npm start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
bun preview # or `npm run preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
bun build # or `npm run build`
```

## Acknowledgements

Extraordinary thanks to the Figma community for the design inspiration. This portfolio site was crafted using the design concept from [Portfolio for Developers Concept V.2](https://www.figma.com/community/file/1100794861710979147/portfolio-for-developers-concept-v-2). I am grateful for the opportunity to utilize such a creative and well-thought-out design framework, which has greatly enhanced the presentation of my work.
