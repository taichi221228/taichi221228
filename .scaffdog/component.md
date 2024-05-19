---
name: "component"
root: "src"
output: "."
questions:
  name: "Please enter a component name."
---

# `{{ inputs.name | kebab }}.tsx`

```
import { component$ } from "@builder.io/qwik";

export const {{ inputs.name | pascal }} = component$(() => {
	return <></>
});

```
