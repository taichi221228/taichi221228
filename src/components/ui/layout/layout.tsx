import { component$, Slot, useStyles$ } from "@builder.io/qwik";

import Header from "../../starter/header/header";
import Footer from "../../starter/footer/footer";

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
