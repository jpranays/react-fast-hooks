import { useCallback, useEffect, useState } from "react";
import { isBrowser } from "../utils";

interface UseScrollLock {
	(): {
		lockScroll: () => void;
		unlockScroll: () => void;
		isLocked: boolean;
	};
}

/**
 * Hook to lock and unlock scrolling on the body element with an extra layer of security using MutationObserver.
 *
 * @returns An object containing methods to lock/unlock scrolling and a boolean indicating if the scroll is locked.
 */
const useScrollLock: UseScrollLock = () => {
	const [isLocked, setIsLocked] = useState<boolean>(false);

	const lockScroll = useCallback(() => {
		if (isBrowser()) {
			document.body.style.overflow = "hidden";
			setIsLocked(true);
		}
	}, []);

	const unlockScroll = useCallback(() => {
		if (isBrowser()) {
			document.body.style.overflow = "";
			setIsLocked(false);
		}
	}, []);

	useEffect(() => {
		if (!isBrowser() || !window.MutationObserver) {
			return;
		}

		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (
					mutation.type === "attributes" &&
					mutation.attributeName === "style"
				) {
					const overflow = document.body.style.overflow;
					if (isLocked && overflow !== "hidden") {
						document.body.style.overflow = "hidden";
					}
				}
			});
		});

		observer.observe(document.body, {
			attributes: true,
			attributeFilter: ["style"],
		});

		return () => {
			observer.disconnect();
			if (isLocked) {
				document.body.style.overflow = "";
			}
		};
	}, [isLocked]);

	return {
		lockScroll,
		unlockScroll,
		isLocked,
	};
};

export default useScrollLock;
