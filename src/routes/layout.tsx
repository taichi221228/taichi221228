import { component$, Slot, useStyles$ } from "@builder.io/qwik";

import fontStyles from "@fontsource/fira-code?inline";
import resetStyles from "@unocss/reset/tailwind.css?inline";
import iconStyles from "remixicon/fonts/remixicon.css?inline";

import { Footer } from "~/components/ui/footer/footer";
import { Header } from "~/components/ui/header/header";

export default component$(() => {
  useStyles$(resetStyles);
  useStyles$(fontStyles);
  useStyles$(iconStyles);

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
