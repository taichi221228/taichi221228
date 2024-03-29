import { component$ } from "@builder.io/qwik";

import styles from "./snake-placeholder.module.css";

export const SnakePlaceholder = component$(() => {
	return (
		<div class={styles.container}>
			<svg
				role="img"
				aria-label='A placeholder for the "Snake Game" component.'
				width="67"
				height="197"
				viewBox="0 0 67 197"
				fill="none"
			>
				<path
					d="M10.8271 39.0794V114.079H62.8271V192.691"
					stroke="url(#paint0_linear_0_1)"
					stroke-width="8"
					stroke-linecap="round"
				/>
				<circle
					opacity="0.1"
					cx="10.827"
					cy="10.9636"
					r="10.3456"
					fill="#43D9AD"
				/>
				<circle
					opacity="0.2"
					cx="10.827"
					cy="10.9636"
					r="7.34558"
					fill="#43D9AD"
				/>
				<circle cx="10.8271" cy="10.9636" r="4" fill="#43D9AD" />
				<defs>
					<linearGradient
						id="paint0_linear_0_1"
						x1="10.8271"
						y1="48.0794"
						x2="73.9999"
						y2="166.691"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#43D9AD" />
						<stop offset="1" stop-color="#43D9AD" stop-opacity="0" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	);
});
