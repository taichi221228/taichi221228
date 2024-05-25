---
name: "component"
root: "src"
output: "."
questions:
  type:
    message: "What type is this component?"
    choices:
      - "common"
      - "page"
      - "package"
    initial: "common"
  name:
    message: "What is the name of this component?"
    if: inputs.type != "page"
    initial: "index"
  path:
    message: "What location is this component in?"
    initial: ""
  hasProps:
    confirm: "Does this component have props?"
    if: inputs.type != "page"
    initial: false
  hasStyle:
    confirm: "Does this component have a style?"
    initial: false
---

# `{{ (inputs.type == "common" ? "components" : "routes") + "/" }}{{ inputs.path != "" ? inputs.path + "/" : "" }}{{ inputs.name | kebab }}.tsx`

```
import { component$ } from "@builder.io/qwik";
{{ if inputs.hasStyle }}
import styles from "./{{ inputs.name | kebab }}.module.css";
{{ end }}{{ if inputs.hasProps }}
type Props = {
	text: "Hello, scaffdog!";
};
{{ end }}{{ if inputs.type == "page" }}
/** @private */
{{- else if inputs.type == "package" }}
/** @package */
{{- end }}
export {{ inputs.type == "page" ? "default" : "const " + (inputs.name | pascal) + " =" }} component$(({{ inputs.hasProps && "{ text }: Props" }}) => {
	return (
		<div{{ inputs.hasStyle && " class={styles.container}" }}>
			<p>{{ inputs.hasProps ? "{text}" : "Hello, scaffdog!" }}</p>
		</div>
	);
});

```

# `{{ inputs.hasStyle || "!" }}{{ (inputs.type == "common" ? "components" : "routes") + "/" }}{{ inputs.path != "" ? inputs.path + "/" : "" }}{{ inputs.name | kebab }}.module.css`

```
.container {
	color: gold;
}

```
