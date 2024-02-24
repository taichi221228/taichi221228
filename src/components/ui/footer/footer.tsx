import { component$ } from "@builder.io/qwik";

import styles from "./footer.module.css";

const username = "taichi221228";

type Sns = Record<
  string,
  {
    username: string;
    url: string;
  }
>;

const sns = {
  twitter: {
    username,
    url: `https://x.com/${username}`,
  },
  facebook: {
    username,
    url: `https://www.facebook.com/${username}`,
  },
  github: {
    username,
    url: `https://github.com/${username}`,
  },
} as const satisfies Sns;
export const Footer = component$(() => {
  return (
    <footer class={styles.footer}>
      <p>find me in:</p>
      {Object.entries(sns).map(([name, profile]) => {
        return (
          <a key={name} href={profile.url} target="_blank" class={styles[name]}>
            {name === "github" && `@${profile.username}`}
            <i class={`ri-${name}-fill`}></i>
          </a>
        );
      })}
    </footer>
  );
});
