import { component$ } from "@builder.io/qwik";

import Music_ from "./music.mdx";

/**
 * @package
 * TODO: MDX is processed as `WrappedMdxContent`, which is compiled directly using `_jsxC`.
 *  Since the QRL is not resolved via `componentQrl`, I need to change it is needed to be serializable.
 */
export const Music = component$(() => <Music_ />);