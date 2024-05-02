import { component$ } from "@builder.io/qwik";

import styles from "./folder-icon.module.css";
import { Icon, type IconProps } from "./icon";

type Props = IconProps & {
	variant?: 1 | 2 | 3;
};

/** @package */
export const FolderIcon = component$<Props>(({ variant, ...props }) => {
	return <Icon class={styles[`is-${variant}`]} type="ri-folder-3-fill" {...props} />;
});
