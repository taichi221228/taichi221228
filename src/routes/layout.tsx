import { component$, Slot, useStyles$ } from "@builder.io/qwik";

import styles from "@unocss/reset/tailwind.css?inline";

import { Footer } from "~/components/ui/footer/footer";
import { Header } from "~/components/ui/header/header";

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
