import { useEffect, useCallback } from "react";
import { isBrowser } from "../utils";

interface UseClickOutside {
	(elementRef: React.RefObject<HTMLElement>, onClickOutside: () => void): void;
}

type onClickOutside = (e: MouseEvent) => void;

/**
 * Hook to detect clicks outside of a specified element.
 *
 * @param {React.RefObject<HTMLElement>} elementRef - A ref to the element to detect clicks outside of.
 * @param {onClickOutside} onClickOutside - A callback function to execute when a click outside is detected.
 */
const useClickOutside: UseClickOutside = (
	elementRef: React.RefObject<HTMLElement>,
	onClickOutside: onClickOutside
) => {
	const handleClickOutside = useCallback(
		(event: MouseEvent) => {
			if (
				elementRef.current &&
				!elementRef.current.contains(event.target as Node)
			) {
				onClickOutside(event);
			}
		},
		[elementRef, onClickOutside]
	);

	useEffect(() => {
		if (!isBrowser()) {
			return;
		}

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [handleClickOutside]);

	return;
};

export default useClickOutside;
