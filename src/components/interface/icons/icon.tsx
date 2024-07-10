import { component$, type QwikAttributes } from "@builder.io/qwik";

import styles from "./icon.module.css";

type Props = {
	type: string;
} & Pick<QwikAttributes<Element>, "class">;

/** @package */
export type IconProps = Omit<Props, "type">;

/** @package */
export const Icon = component$(({ type, class: className, ...props }: Props) => {
	return <i class={[className, type, styles.icon]} {...props} />;
});
