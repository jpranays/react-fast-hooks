import { useState, useEffect, useCallback } from "react";
import { isBrowser } from "../utils";

interface UseSound {
	play: () => void;
	pause: () => void;
	stop: () => void;
	setVolume: (volume: number) => void;
	isPlaying: boolean;
	error: Error | null;
}

/**
 * Hook to play and manage sound effects.
 *
 * @param {string} url - The URL of the sound file.
 * @returns An object containing functions to play, pause, stop the sound, set volume, and state variables for the playing status and errors.
 */
const useSound = (url: string): UseSound => {
	const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		if (!isBrowser() || !window.Audio) {
			setError(new Error("Sound is not supported in this environment."));
			return;
		}

		const audioElement = new Audio(url);
		setAudio(audioElement);

		const handlePlay = () => setIsPlaying(true);
		const handlePause = () => setIsPlaying(false);
		const handleError = (e: any) => setError(e);

		audioElement.addEventListener("play", handlePlay);
		audioElement.addEventListener("pause", handlePause);
		audioElement.addEventListener("error", handleError);

		return () => {
			audioElement.removeEventListener("play", handlePlay);
			audioElement.removeEventListener("pause", handlePause);
			audioElement.removeEventListener("error", handleError);
			audioElement.pause();
			audioElement.currentTime = 0;
		};
	}, [url]);

	const play = useCallback(() => {
		if (audio) {
			audio.play().catch((e) => setError(e));
		}
	}, [audio]);

	const pause = useCallback(() => {
		if (audio) {
			audio.pause();
		}
	}, [audio]);

	const stop = useCallback(() => {
		if (audio) {
			audio.pause();
			audio.currentTime = 0;
		}
	}, [audio]);

	const setVolume = useCallback(
		(volume: number) => {
			if (audio) {
				audio.volume = volume;
			}
		},
		[audio]
	);

	return {
		play,
		pause,
		stop,
		setVolume,
		isPlaying,
		error,
	};
};

export default useSound;
