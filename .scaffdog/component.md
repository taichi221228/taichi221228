---
name: "component"
root: "src"
output: "."
questions:
  isPage:
    confirm: "Is this component for routing?"
    initial: false
  name:
    message: "What is the name of this component?"
    if: (!inputs.isPage)
    initial: "index"
  inRoutes:
    confirm: "Is this component in `routes/`?"
    if: (!inputs.isPage)
    initial: true
  routePath:
    message: "Where is this component located within `routes/`?"
    if: inputs.inRoutes
    initial: "."
  componentPath:
    message: "Where is this component located within `components/`?"
    if: (!inputs.inRoutes)
    initial: "."
  isPackage:
    confirm: "Is this component a package?"
    if: (!inputs.inRoutes)
    initial: false
  hasProps:
    confirm: "Does this component have props?"
    initial: false
  hasStyle:
    confirm: "Does this component have a style?"
    initial: false
---

# `{{ resolve "src" (inputs.inRoutes ? ("routes/" + inputs.routePath) : ("components/" + inputs.componentPath)) (inputs.name | kebab) }}.tsx`

```
import { component$ } from "@builder.io/qwik";
{{ if inputs.hasStyle }}
import styles from "./{{ inputs.name | kebab }}.module.css";
{{ end }}{{ if inputs.hasProps }}
type Props = {
	text: "Hello, scaffdog!";
};
{{ end }}{{ if inputs.isPage }}
/** @private */
{{- else if inputs.inRoutes || inputs.isPackage }}
/** @package */
{{- end }}
export {{ inputs.isPage ? "default" : "const " + (inputs.name | pascal) + " =" }} component$(({{ inputs.hasProps && "{ text }: Props" }}) => {
	return (
		<div{{ inputs.hasStyle && " class={styles.container}" }}>
			<p>{{ inputs.hasProps ? "{text}" : "Hello, scaffdog!" }}</p>
		</div>
	);
});

```

# `{{ inputs.hasStyle || "!" }}{{ resolve "src" (inputs.inRoutes ? ("routes/" + inputs.routePath) : ("components/" + inputs.componentPath)) (inputs.name | kebab) }}.module.css`

```
.container {
	color: gold;
}

```
