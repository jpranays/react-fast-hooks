---
id: useHistory
title: useHistory
sidebar_label: useHistory
---

Hook to manage browser history.

### Usage

```jsx live
function App() {
	const { push, replace, goBack, goForward, state } = useHistory();

	return (
		<div>
			<button onClick={() => push("/new-path", { some: "state" })}>
				Push State
			</button>
			<button onClick={() => replace("/replace-path", { some: "state" })}>
				Replace State
			</button>
			<button onClick={() => goBack()}>Go Back</button>
			<button onClick={() => goForward()}>Go Forward</button>
			<div>Current State: {JSON.stringify(state)}</div>
		</div>
	);
}
```

### API

Returns : An object with the following properties:

- `history` : `History` - The history object.
- `state` : `HistoryState | null` - The current state object.
- `push` : `(path: string, state?: HistoryState) => void` - Pushes a new entry onto the history stack.
- `replace` : `(path: string, state?: HistoryState) => void` - Replaces the current entry on the history stack.
- `goBack` : `() => void` - Moves back one entry in the history stack.
- `goForward` : `() => void` - Moves forward one entry in the history stack.
