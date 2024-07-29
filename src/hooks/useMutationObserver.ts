import { useEffect, useRef } from "react";
import { isBrowser } from "../utils";

interface UseMutationObserverOptions {
	childList?: boolean;
	attributes?: boolean;
	characterData?: boolean;
	subtree?: boolean;
	attributeOldValue?: boolean;
	characterDataOldValue?: boolean;
	attributeFilter?: string[];
}

type MutationCallback = (
	mutations: MutationRecord[],
	observer: MutationObserver
) => void;

/**
 * Hook to observe changes to a DOM element using MutationObserver.
 *
 * @param {React.RefObject<HTMLElement>} ref - A React ref to the element to observe.
 * @param {MutationCallback} callback - A function to handle mutations.
 * @param {UseMutationObserverOptions} options - An object specifying which DOM mutations to observe.
 */
const useMutationObserver = (
	ref: React.RefObject<HTMLElement>,
	callback: MutationCallback,
	options: UseMutationObserverOptions
): void => {
	const observer = useRef<MutationObserver | null>(null);

	useEffect(() => {
		if (!isBrowser() || !ref.current || !window.MutationObserver) {
			return;
		}

		observer.current = new MutationObserver(callback);

		observer.current.observe(ref.current, {
			childList: options.childList ?? true,
			attributes: options.attributes ?? true,
			characterData: options.characterData ?? false,
			subtree: options.subtree ?? false,
			attributeOldValue: options.attributeOldValue ?? false,
			characterDataOldValue: options.characterDataOldValue ?? false,
			attributeFilter: options.attributeFilter,
		});

		return () => {
			observer.current?.disconnect();
		};
	}, [ref, callback, options]);

	return;
};

export default useMutationObserver;
