import { useState, useCallback } from "react";
import { isBrowser } from "../utils";

interface UseRandomColorResult {
	color: string;
	generateNewColor: () => void;
}

/**
 * Hook to generate a random color.
 *
 * @returns An object containing a string representing a random color in hexadecimal format and a function to generate a new random color.
 */
const useRandomColor = (): UseRandomColorResult => {
	const generateRandomColor = (): string => {
		const letters = "0123456789ABCDEF";
		let color = "#";
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	};

	const [color, setColor] = useState<string>(
		isBrowser() ? generateRandomColor() : "#000000"
	);

	const generateNewColor = useCallback(() => {
		setColor(generateRandomColor());
	}, []);

	return { color, generateNewColor };
};

export default useRandomColor;
