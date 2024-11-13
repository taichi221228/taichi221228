import { macroPlugin as resolveMacroPlugin } from "@builder.io/vite-plugin-macro";
import { defineConfig, type UserConfig } from "vite";
import resolveTsconfigPlugin from "vite-tsconfig-paths";
import { qwikVite as resolveQwikPlugin } from "@builder.io/qwik/optimizer";
import { qwikCity as resolveQwikCityPlugin } from "@builder.io/qwik-city/vite";

/** @private */
export default defineConfig((): UserConfig => {
	return {
		plugins: [
			resolveMacroPlugin({ preset: "pandacss" }),
			resolveQwikCityPlugin({
				rewriteRoutes: [{ paths: { hello: "" } }],
			}),
			resolveQwikPlugin(),
			resolveTsconfigPlugin(),
		],
		server: {
			headers: {
				"Cache-Control": "public, max-age=0",
			},
		},
		preview: {
			headers: {
				"Cache-Control": "public, max-age=600",
			},
		},
	};
});
