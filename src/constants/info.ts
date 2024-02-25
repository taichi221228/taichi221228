export const TITLE = "taichi-fukuda";
export const NAME = "Taichi Fukuda";
export const USERNAME = "taichi221228";

type Sns = Record<
  string,
  {
    username: string;
    url: string;
  }
>;

export const SNS = {
  twitter: {
    username: USERNAME,
    url: `https://x.com/${USERNAME}`,
  },
  facebook: {
    username: USERNAME,
    url: `https://www.facebook.com/${USERNAME}`,
  },
  github: {
    username: USERNAME,
    url: `https://github.com/${USERNAME}`,
  },
} as const satisfies Sns;
