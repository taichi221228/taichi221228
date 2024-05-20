---
name: "component"
root: "src"
output: "."
questions:
  name: "Please enter a component name."
  hasProps:
    confirm: "Does this component have props?"
    initial: false
  hasStyle:
    confirm: "Does this component have a style?"
    initial: false
---

# `{{ inputs.name | kebab }}.tsx`

```
import { component$ } from "@builder.io/qwik";
{{ if inputs.hasStyle }}
import styles from "./{{ inputs.name | kebab }}.module.css";
{{ end }}
{{ inputs.hasProps && "type Props = {
	message: string;
};
" }}
export const {{ inputs.name | pascal }} = component$(({{ inputs.hasProps && "{ message }: Props" }}) => {
	return (
		<div{{ if inputs.hasStyle }} class={styles.{{inputs.name | camel}}}{{ end }}>
			<p>{message}</p>
		</div>
	);
});

```

# `{{ inputs.hasStyle || "!" }}{{ inputs.name | kebab }}.module.css`

```
.{{ inputs.name | camel }} {
	color: gold;
}
```
