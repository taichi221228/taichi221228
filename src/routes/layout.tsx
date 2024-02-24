import { component$, Slot, useStyles$ } from "@builder.io/qwik";

import { Footer } from "~/components/ui/footer/footer";
import { Header } from "~/components/ui/header/header";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
