import { component$, type FunctionComponent, type PropsOf, Slot } from "@builder.io/qwik";

type Component = FunctionComponent | string;

type Props<C extends Component = Component> = { as?: C } & PropsOf<string extends C ? "div" : C>;

export type PolyProps<C extends Component = Component> = Props<C>;

export const Poly = component$(<C extends Component = Component>({ as, ...props }: Props<C>) => {
	const Component = as ?? "div";

	return (
		<Component {...props}>
			<Slot />
		</Component>
	);
});
