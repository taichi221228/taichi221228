import { component$ } from "@builder.io/qwik";

import type { Props } from "./index";

export const FolderIcon = component$<Props>(({ class: c }) => {
	return <i class={[c, "ri-folder-3-fill"]} />;
});
