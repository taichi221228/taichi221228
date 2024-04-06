import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
	const head = useDocumentHead();
	const location = useLocation();

	return (
		<>
			<title>{head.title}</title>

			<link rel="canonical" href={location.url.href} />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="icon" type="image/svg+xml" href="/favicon.svg" />

			{head.meta.map(({ key, ...props }) => (
				<meta key={key} {...props} />
			))}

			{head.links.map(({ key, ...props }) => (
				<link key={key} {...props} />
			))}

			{head.styles.map(({ key, props, style }) => (
				<style
					key={key}
					{...props}
					// biome-ignore lint/security/noDangerouslySetInnerHtml:
					dangerouslySetInnerHTML={style}
				/>
			))}

			{head.scripts.map(({ key, props, script }) => (
				<script
					key={key}
					{...props}
					// biome-ignore lint/security/noDangerouslySetInnerHtml:
					dangerouslySetInnerHTML={script}
				/>
			))}
		</>
	);
});
