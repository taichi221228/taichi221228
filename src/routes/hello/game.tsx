import { component$ } from "@builder.io/qwik";

import { Button } from "~/components/interface/button";

import styles from "./game.module.css";
import { Food } from "./game/food";
import { Key } from "./game/key";
import { Polygons } from "./game/polygons";
import { SnakePlaceholder } from "./game/snake-placeholder";

const foods = Array.from({ length: 10 }).map((_, id) => ({ id }));

/** @package */
export const Game = component$(() => {
	return (
		<div class={styles.game}>
			<div class={styles.main}>
				<SnakePlaceholder />
				<Button onClick$={() => {}} variant="accent">
					start-game
				</Button>
			</div>

			<div class={styles.sub}>
				<div class={styles.help}>
					<p>use keyboard</p>
					<p>arrows to play</p>
					<ul>
						<li />
						<li>
							<Key direction="up" />
						</li>
						<li />
						<li>
							<Key direction="left" />
						</li>
						<li>
							<Key direction="down" />
						</li>
						<li>
							<Key direction="right" />
						</li>
					</ul>
				</div>
				<div class={styles.score}>
					<p>food left</p>
					<ul>
						{foods.map(({ id }) => (
							<li key={id}>
								<Food isEaten={id >= 7} />
							</li>
						))}
					</ul>
				</div>
			</div>

			<div class={styles.polygons}>
				<Polygons />
			</div>
		</div>
	);
});
