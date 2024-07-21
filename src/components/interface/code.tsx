import { component$ } from "@builder.io/qwik";

type Props = {
	text: "Hello, scaffdog!";
};

export const Code = component$(({ text }: Props) => {
	return (
		<div>
			<h1>{text}</h1>
		</div>
	);
});
