import { useState, useEffect, useCallback } from "react";
import { isBrowser } from "../utils"; // Make sure to use isBrowser from your utils

interface HistoryState {
	[key: string]: any;
}

interface UseHistory {
	history: History;
	state: HistoryState | null;
	push: (path: string, state?: HistoryState) => void;
	replace: (path: string, state?: HistoryState) => void;
	goBack: () => void;
	goForward: () => void;
}

/**
 * Hook to manage browser history.
 *
 * @returns {UseHistory} An object containing the history instance and utility functions to interact with it.
 */
const useHistory = (): UseHistory => {
	const [history, setHistory] = useState<History>(window.history);
	const [state, setState] = useState<HistoryState | null>(null);

	const push = useCallback((path: string, state?: HistoryState) => {
		if (isBrowser()) {
			window.history.pushState(state, "", path);
			setState(state || null);
		}
	}, []);

	const replace = useCallback((path: string, state?: HistoryState) => {
		if (isBrowser()) {
			window.history.replaceState(state, "", path);
			setState(state || null);
		}
	}, []);

	const goBack = useCallback(() => {
		if (isBrowser()) {
			window.history.back();
		}
	}, []);

	const goForward = useCallback(() => {
		if (isBrowser()) {
			window.history.forward();
		}
	}, []);

	useEffect(() => {
		const handlePopState = (event: PopStateEvent) => {
			setState(event.state || null);
		};

		if (isBrowser()) {
			window.addEventListener("popstate", handlePopState);
			return () => {
				window.removeEventListener("popstate", handlePopState);
			};
		}
	}, []);

	return {
		history,
		state,
		push,
		replace,
		goBack,
		goForward,
	};
};

export default useHistory;
