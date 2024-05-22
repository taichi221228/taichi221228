---
name: "component"
root: "src"
output: "."
questions:
  name: "What is the name of component?"
  type:
    message: "What type is this component?"
    choices:
      - "common"
      - "page"
      - "package"
    initial: "common"
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
{{ end }}{{ if inputs.hasProps }}
type Props = {
	message: string;
};
{{ end }}{{ inputs.type == "package" && "
/** @package */" }}
export const {{ inputs.name | pascal }} = component$(({{ inputs.hasProps && "{ message }: Props" }}) => {
	return (
		<div{{ inputs.hasStyle && " class={styles.container}" }}>
			<p>{message}</p>
		</div>
	);
});

```

# `{{ inputs.hasStyle || "!" }}{{ inputs.name | kebab }}.module.css`

```
.container {
	color: gold;
}
```
