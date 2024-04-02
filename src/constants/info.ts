import type { Component } from "@builder.io/qwik";

import { FacebookIcon, GitHubIcon, TwitterIcon } from "~/components/ui/icons";

export const NAME = "Taichi Fukuda";
export const SITENAME = "taichi-fukuda";
export const USERNAME = "taichi221228";

type Sns = Record<
	string,
	{
		username: string;
		url: string;
		Logo: Component;
	}
>;

export const SNS = {
	twitter: {
		username: USERNAME,
		url: `https://x.com/${USERNAME}`,
		Logo: TwitterIcon,
	},
	facebook: {
		username: USERNAME,
		url: `https://www.facebook.com/${USERNAME}`,
		Logo: FacebookIcon,
	},
	github: {
		username: USERNAME,
		url: `https://github.com/${USERNAME}`,
		Logo: GitHubIcon,
	},
} as const satisfies Sns;
