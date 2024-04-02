import type { Component } from "@builder.io/qwik";

import { FacebookIcon, GitHubIcon, TwitterIcon } from "~/components/ui/icons";

export const NAME = "Taichi Fukuda";
export const SITENAME = "taichi-fukuda";
export const USERNAME = "taichi221228";

type Sns_ = Record<
	string,
	{
		Logo: Component;
		username: string;
		url: string;
	}
>;

export type Sns = typeof SNS;

export const SNS = {
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
	twitter: {
		Logo: TwitterIcon,
		username: USERNAME,
		url: `https://x.com/${USERNAME}`,
	},
} as const satisfies Sns_;
