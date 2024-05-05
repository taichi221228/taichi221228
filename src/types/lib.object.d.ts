interface ObjectConstructor {
	entries<T>(o: T): (keyof T extends infer U ? (U extends keyof T ? [U, T[U]] : never) : never)[];
}
