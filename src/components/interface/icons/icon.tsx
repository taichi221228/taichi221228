import { component$, type QwikAttributes } from "@builder.io/qwik";

type Props = {
	type: string;
} & Pick<QwikAttributes<Element>, "class">;

/** @package */
export type IconProps = Omit<Props, "type">;

/** @package */
export const Icon = component$<Props>(({ class: className, type, ...props }) => {
	return <i class={[className, type]} />;
});
