---
name: "component"
root: "src"
output: "."
questions:
  name: "Please enter a component name."
  tag:
    message: "What is the tag type of the Root Node"
    initial: "div"
  hasStyle:
    confirm: "Do you need a style?"
    initial: false
---

# `{{ inputs.name | kebab }}.tsx`

```
import { component$ } from "@builder.io/qwik";
{{ if inputs.hasStyle }}
import styles from "./{{ inputs.name | kebab }}.module.css";
{{ end }}
export const {{ inputs.name | pascal }} = component$(() => {
	return <{{ inputs.tag }}{{ if inputs.hasStyle }} class={styles.{{inputs.name | camel}}}{{ end }} />;
});

```

# `{{ inputs.hasStyle || "!" }}{{ inputs.name | kebab }}.module.css`

```
.{{ inputs.name | camel }} {
	background-color: gold; /* TODO: This is temporary. */
}
```
