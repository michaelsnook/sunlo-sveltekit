// stolen directly from
// https://code.build/p/svelte-5-todo-app-with-firebase-X1Tr3J

export const rune = <T>(initialValue: T) => {
	let _rune = $state(initialValue)

	return {
		get value() {
			return _rune
		},
		set value(v: T) {
			_rune = v
		},
	}
}
