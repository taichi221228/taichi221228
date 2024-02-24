import { component$, Slot } from "@builder.io/qwik";

import { Footer } from "~/components/ui/footer/footer";
import { Header } from "~/components/ui/header/header";

export default component$(() => {
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
