# taichi221228 :zap:

![Capture of top page](https://github.com/taichi221228/taichi221228/assets/58300794/8e1fd874-3223-4bee-9adb-c122446a3a01)

Welcome! This repository serves as the home for my portfolio site, taichi221228, a living document of my journey and growth in the tech world. Here, I showcase my technical articles, projects, and the evolving story of my professional development. Dive into my world of coding, learning, and creative solutions!

---

## Note :construction:

This repository is still a work in progress. Some sections may be incomplete as I continue to develop and update the content. Thank you for your understanding!

## Structure

This project is using Qwik with [QwikCity](https://qwik.builder.io/qwikcity/overview/). QwikCity is just an extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory-based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.builder.io/qwikcity/routing/overview/) for more info.

- `src/components`: Recommended directory for components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Stack

### Core

- [Bun](https://bun.sh/)
- [Qwik](https://qwik.builder.io/)
- [QwikCity](https://qwik.builder.io/qwikcity/overview/)

### UI

- [React](https://reactjs.org/) :construction:

### Middleware

- [Hono](https://hono.dev/) :thinking:
- [HonoX](https://github.com/honojs/honox/) :thinking:

### Content

- [Markdown](https://www.markdownguide.org/) :construction:

### Styling

- [CSS Modules](https://github.com/css-modules/css-modules/)
- [UnoCSS (for resetting styles)](https://unocss.dev/)
- [Remix Icon](https://remixicon.com/)
- [Fontsource](https://fontsource.org/)

### Performance

- [Partytown](https://partytown.builder.io/) :construction:

### Tooling

- [Vite](https://vitejs.dev/)
- [esbuild](https://esbuild.github.io/)
- [Rollup](https://rollupjs.org/)
- [scaffdog](https://scaff.dog/) :construction:
- [Zenn CLI](https://zenn.dev/zenn/articles/zenn-cli-guide) :construction:

### Quality

- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [textlint](https://textlint.github.io/) :construction:
- [Prettier](https://prettier.io/)
- [Biome](https://biomejs.dev/) :construction:

### Testing

- [Vitest](https://vitejs.dev/) :construction:
- [Storybook](https://storybook.js.org/) :construction:
- [Playwright](https://playwright.dev/) :construction:

### Hosting

- [Cloudflare](https://www.cloudflare.com/) :thinking:


### Design

- [Figma](https://www.figma.com/)

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

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

Special thanks to the Figma community for the design inspiration. This portfolio site was crafted using the design concept from [Portfolio for Developers Concept V.2](https://www.figma.com/community/file/1100794861710979147). I am grateful for the opportunity to utilize such a creative and well-thought-out design framework, which has greatly enhanced the presentation of my work.
