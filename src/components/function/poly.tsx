import { component$, type FunctionComponent, type PropsOf, Slot } from "@builder.io/qwik";

type COMPONENT = FunctionComponent | string;

export type PolyProps<C extends COMPONENT = COMPONENT> = { as?: C } & PropsOf<string extends C ? "div" : C>;

export const Poly = component$(<C extends COMPONENT = COMPONENT>({ as, ...props }: PolyProps<C>) => {
	const Component = as ?? "div";

	return (
		<Component {...props}>
			<Slot />
		</Component>
	);
});
