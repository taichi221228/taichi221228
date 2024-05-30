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

| Name                                                                | Category               | Status             |
| ------------------------------------------------------------------- | ---------------------- | ------------------ |
| [Bun](https://bun.sh/)                                              | Core                   | :white_check_mark: |
| [Qwik](https://qwik.dev/)                                           | Core                   | :white_check_mark: |
| [QwikCity](https://qwik.dev/)                                       | Core                   | :white_check_mark: |
| [React](https://react.dev/)                                         | UI Framework           | :clipboard:        |
| [ElysiaJS](https://elysiajs.com/)                                   | Middleware             | :clipboard:        |
| [Modular Forms](https://modularforms.dev/)                          | Form Management        | :construction:     |
| [Valibot](https://valibot.dev/)                                     | Validation             | :construction:     |
| [Markdown](https://www.markdownguide.org/)                          | Content Formatting     | :clipboard:        |
| Zenn/Qiita/Dev.to                                                   | Content Platform       | :clipboard:        |
| [CSS Modules](https://github.com/css-modules/css-modules/)          | Styling                | :white_check_mark: |
| [Happy CSS Modules](https://github.com/mizdra/happy-css-modules/)   | Styling                | :clipboard:        |
| [Remix Icon](https://remixicon.com/)                                | Icon Set               | :white_check_mark: |
| [Fontsource](https://fontsource.org/)                               | Font Set               | :white_check_mark: |
| [Shiki](https://shiki.style/)                                       | Syntax Highlighting    | :white_check_mark: |
| [Partytown](https://partytown.builder.io/)                          | Performance            | :clipboard:        |
| [Speedlify](https://www.speedlify.dev/)                             | Performance Monitoring | :clipboard:        |
| [Vite](https://vitejs.dev/)                                         | Build Tool             | :white_check_mark: |
| [esbuild](https://esbuild.github.io/)                               | Build Tool             | :white_check_mark: |
| [Rollup](https://rollupjs.org/)                                     | Build Tool             | :white_check_mark: |
| [Dependabot](https://github.com/dependabot)                         | Dependency Management  | :clipboard:        |
| [TypeScript](https://www.typescriptlang.org/)                       | Language               | :white_check_mark: |
| [ESLint](https://eslint.org/)                                       | Linter                 | :white_check_mark: |
| [Stylelint](https://stylelint.io/)                                  | Linter                 | :white_check_mark: |
| [textlint](https://textlint.github.io/)                             | Linter                 | :white_check_mark: |
| [markdownlint](https://github.com/DavidAnson/markdownlint/)         | Linter                 | :clipboard:        |
| [commitlint](https://github.com/conventional-changelog/commitlint/) | Linter                 | :white_check_mark: |
| [EditorConfig](https://editorconfig.org/)                           | Code Style             | :white_check_mark: |
| [Prettier](https://prettier.io/)                                    | Code Formatter         | :white_check_mark: |
| [Biome](https://biomejs.dev/)                                       | Code Quality           | :white_check_mark: |
| [Husky](https://typicode.github.io/husky/)                          | Git Hooks              | :white_check_mark: |
| [CR.GPT](https://github.com/anc95/ChatGPT-CodeReview/)              | Code Reviewer          | :construction:     |
| [scaffdog](https://scaff.dog/)                                      | Scaffolding            | :white_check_mark: |
| [Vitest](https://vitest.dev/)                                       | Testing Framework      | :clipboard:        |
| [Storybook](https://storybook.js.org/)                              | UI Testing             | :clipboard:        |
| [Playwright](https://playwright.dev/)                               | E2E Testing            | :clipboard:        |
| [BrowserStack](https://www.browserstack.com/)                       | Cross-Browser Testing  | :clipboard:        |
| [Cloudflare](https://www.cloudflare.com/)                           | Hosting                | :clipboard:        |
| [Nx](https://nx.dev/)                                               | Monorepo Tooling       | :clipboard:        |
| [Figma](https://www.figma.com/)                                     | Design                 | :white_check_mark: |

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
