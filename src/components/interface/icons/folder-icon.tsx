import { component$ } from "@builder.io/qwik";

import { Icon, type IconProps } from "./icon";

import styles from "./folder-icon.module.css";

type Props = {
	variant?: 1 | 2 | 3;
} & IconProps;

/** @package */
export const FolderIcon = component$(({ variant, class: className, ...props }: Props) => {
	return <Icon class={[className, styles[`is-${variant}`]]} type="ri-folder-3-fill" {...props} />;
});
