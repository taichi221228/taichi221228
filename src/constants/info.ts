import type { Component } from "@builder.io/qwik";

import { FacebookIcon, GitHubIcon, XIcon } from "~/components/ui/icons";

export const NAME = "Taichi Fukuda";
export const SITENAME = "taichi-fukuda";
export const USERNAME = "taichi221228";

export type Snss = typeof SNSS;
export type Sns = Snss[keyof Snss];

export const SNSS = {
	facebook: {
		Logo: FacebookIcon,
		username: USERNAME,
		url: `https://www.facebook.com/${USERNAME}`,
	},
	github: {
		Logo: GitHubIcon,
		username: USERNAME,
		url: `https://github.com/${USERNAME}`,
	},
	x: {
		Logo: XIcon,
		username: USERNAME,
		url: `https://x.com/${USERNAME}`,
	},
} as const satisfies Record<
	string,
	{
		Logo: Component;
		username: string;
		url: string;
	}
>;
