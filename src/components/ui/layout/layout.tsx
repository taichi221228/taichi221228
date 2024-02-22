import { component$, Slot, useStyles$ } from "@builder.io/qwik";

import Header from "../header/header";
import Footer from "../footer/footer";

import styles from "../../../routes/styles.css?inline";

export const Layout = component$(() => {
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
