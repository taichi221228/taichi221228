import { component$, type FunctionComponent, type PropsOf, Slot } from "@builder.io/qwik";

type COMPONENT = FunctionComponent | string;

export type PolyProps<C extends COMPONENT = COMPONENT> = { as?: C };

export const Poly = component$(
	<C extends COMPONENT = COMPONENT>({ as: Component = "div" as C, ...props }: PolyProps<C> & PropsOf<string extends C ? "div" : C>) => {
		return (
			<Component {...props}>
				<Slot />
			</Component>
		);
	},
);
