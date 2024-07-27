import { useState, useEffect } from "react";
import { isBrowser } from "../utils";

interface KeyCombo {
	[key: string]: boolean;
}

interface UseKeyCombo {
	(keys: string[]): boolean;
}

/**
 * Hook to detect if a specified key combination is pressed.
 *
 * @param {string[]} keys - The key combination to detect.
 * @returns A boolean true if the key combination is pressed, false otherwise.
 */
const useKeyCombo: UseKeyCombo = (keys) => {
	const [keyComboPressed, setKeyComboPressed] = useState<boolean>(false);
	const pressedKeys: KeyCombo = {};

	const downHandler = ({ key }: KeyboardEvent) => {
		pressedKeys[key] = true;
		checkKeyCombo();
	};

	const upHandler = ({ key }: KeyboardEvent) => {
		pressedKeys[key] = false;
		checkKeyCombo();
	};

	const checkKeyCombo = () => {
		const allKeysPressed = keys.every((key) => pressedKeys[key]);
		setKeyComboPressed(allKeysPressed);
	};

	useEffect(() => {
		if (!isBrowser()) {
			return;
		}

		window.addEventListener("keydown", downHandler);
		window.addEventListener("keyup", upHandler);

		return () => {
			window.removeEventListener("keydown", downHandler);
			window.removeEventListener("keyup", upHandler);
		};
	}, [keys]);

	return keyComboPressed;
};

export default useKeyCombo;
