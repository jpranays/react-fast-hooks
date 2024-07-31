import { useEffect, useRef } from "react";
import { isBrowser } from "../utils";

/**
 * Hook to run an effect only on updates, not on initial mount.
 *
 * @param {Function} effect - The effect function to run.
 * @param {Array<any>} deps - The dependency array for the effect.
 */
const useUpdateEffect = (
	effect: React.EffectCallback,
	deps: React.DependencyList
) => {
	const isFirstMount = useRef(true);

	useEffect(() => {
		if (!isBrowser()) {
			return;
		}

		if (isFirstMount.current) {
			isFirstMount.current = false;
			return;
		}

		return effect();
	}, deps);
};

export default useUpdateEffect;
