---
name: "route"
root: "src"
output: "."
questions:
  path:
    message: "What is the path for this route?"
    initial: "scaffdog-route/"
  title:
    message: "What is the title for this route?"
    initial: "Scaffdog Route"
  hasStyle:
    confirm: "Does this route have a style?"
    initial: false
---

# `{{ resolve "src" "routes" (inputs.path | kebab) "index.tsx" }}`

```
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { NAME } from "~/constants/info";
import { createPageTitle } from "~/utilities/create-page-title";
{{ if inputs.hasStyle }}
import styles from "./index.module.css";
{{ end }}
/** @private */
export default component$(() => {
	return (
		<div{{ inputs.hasStyle && " class={styles.container}" }}>
			<h1>Hello, scaffdog!</h1>
		</div>
	);
});

/** @private */
export const head: DocumentHead = {
	title: createPageTitle("{{ inputs.title }}"),
	meta: [
		{
			name: "description",
			content: `This is a personal website of ${NAME}.`,
		},
	],
};

```

# `{{ inputs.hasStyle || "!" }}{{ resolve "src" "routes" (inputs.path | kebab) "index.module.css" }}`

```
.container {
	color: gold;
}

```
