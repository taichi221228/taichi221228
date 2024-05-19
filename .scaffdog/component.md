---
name: "component"
root: "src"
output: "."
questions:
  name: "Please enter a component name."
  hasStyle:
    confirm: "Do you need a style?"
    initial: false
---

# `{{ inputs.name | kebab }}.tsx`

```
import { component$ } from "@builder.io/qwik";

{{ if inputs.hasStyle }}import styles from "./{{ inputs.name | kebab }}.module.css";{{ end }}

export const {{ inputs.name | pascal }} = component$(() => {
	return {{ if inputs.hasStyle }}<div class={styles.{{inputs.name | camel}}} />{{ else }}<></>{{ end }};
});

```

# `{{ inputs.hasStyle || "!" }}{{ inputs.name | kebab }}.module.css`

```
/* stylelint-disable-next-line block-no-empty */
.{{ inputs.name | camel }} {
}
```
