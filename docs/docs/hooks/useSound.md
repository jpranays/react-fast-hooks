---
id: useSound
title: useSound
sidebar_label: useSound
---

Hook to play and manage sound effects.

### Usage

```jsx live
function App() {
	const { play, pause, stop, setVolume, isPlaying, error } = useSound(
		"https://file-examples.com/storage/fe44eeb9cb66ab8ce934f14/2017/11/file_example_MP3_700KB.mp3"
	);

	return (
		<div>
			<button onClick={play} disabled={isPlaying}>
				Play
			</button>
			<button onClick={pause} disabled={!isPlaying}>
				Pause
			</button>
			<button onClick={stop} disabled={!isPlaying}>
				Stop
			</button>
			<p>
				<label>Volume : </label>
				<input
					type="range"
					min="0"
					max="1"
					step="0.01"
					onChange={(e) => setVolume(Number(e.target.value))}
				/>
				<p>{isPlaying ? "Playing" : "Paused"}</p>
			</p>
			{error && <p>Error loading sound: {error.message}</p>}
		</div>
	);
}
```

### API

Parameters

- `src` : `string` - The URL of the sound file to play.

Returns : Object containing the following properties:

- `play`: `() => void` - A function to play the sound.
- `pause`: `() => void` - A function to pause the sound.
- `stop`: `() => void` - A function to stop the sound.
- `setVolume`: `(volume: number) => void` - A function to set the volume of the sound.
- `isPlaying`: `boolean` - Whether the sound is currently playing.
- `error`: `Error | null` - The error object if the sound fails to load.
