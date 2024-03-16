import { SITENAME } from "~/constants/info";

export function createPageTitle(...parts: string[]): string {
	return [...parts, SITENAME].join(" · ");
}
