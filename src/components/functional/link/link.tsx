import { component$, Slot } from "@builder.io/qwik";
import { type LinkProps, Link as _Link } from "@builder.io/qwik-city";

import styles from "./link.module.css";

type Props = LinkProps & { isDisabled?: boolean };
export const Link = component$<Props>(
	({ class: className, isDisabled = false, ...props }) => {
		return (
			<_Link
				{...props}
				class={[isDisabled && styles.disabled, className]}
				aria-current={isDisabled && "page"}
				tabIndex={isDisabled ? -1 : 0}
			>
				<Slot />
			</_Link>
		);
	},
);
