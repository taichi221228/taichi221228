import { component$ } from "@builder.io/qwik";

import styles from "./folder-icon.module.css";
import type { Props as IconProps } from "../icons";

type Props = IconProps & {
	variant?: 1 | 2 | 3;
};

/** @package */
export const FolderIcon = component$<Props>(({ class: c, variant = 1 }) => {
	return <i class={[c, styles[`is-${variant}`], "ri-folder-3-fill"]} />;
});
