import { useState, useEffect } from "react";
import { isBrowser } from "../utils";

interface UseKeyPress {
	(targetKey: string): boolean;
}

/**
 * Hook to detect if a specified key is pressed.
 *
 * @param {string} targetKey - The key to detect.
 * @returns A boolean true if the key is pressed, false otherwise.
 */
const useKeyPress: UseKeyPress = (targetKey: string) => {
	const [keyPressed, setKeyPressed] = useState<boolean>(false);

	const downHandler = ({ key }: KeyboardEvent) => {
		if (key === targetKey) {
			setKeyPressed(true);
		}
	};

	const upHandler = ({ key }: KeyboardEvent) => {
		if (key === targetKey) {
			setKeyPressed(false);
		}
	};

	useEffect(() => {
		if (!isBrowser()) {
			return;
		}

		window.addEventListener("keypress", downHandler);
		window.addEventListener("keyup", upHandler);

		return () => {
			window.removeEventListener("keypress", downHandler);
			window.removeEventListener("keyup", upHandler);
		};
	}, [targetKey]);

	return keyPressed;
};

export default useKeyPress;
