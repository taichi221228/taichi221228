import { component$, Slot } from "@builder.io/qwik";

import { Footer } from "~/components/ui/footer/footer";
import { Header } from "~/components/ui/header/header";
import { useGlobalStyles } from "~/hooks/global-styles/global-styles";

import styles from "./layout.module.css";

export default component$(() => {
  useGlobalStyles();

  return (
    <>
      <Header />
      <div class={styles.wrapper}>
        <main>
          <Slot />
        </main>
      </div>
      <Footer />
    </>
  );
});
