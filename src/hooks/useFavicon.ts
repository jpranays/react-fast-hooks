import { useCallback, useEffect, useState } from "react";
import { isBrowser } from "../utils";

type SetFaviconFn = (faviconUrl: string) => void;
interface UseFavicon {
	(initialFaviconUrl: string): SetFaviconFn;
}

/**
 * Hook to set and update the favicon of the webpage.
 *
 * @param {string} initialFaviconUrl - The initial URL of the favicon to set.
 * @returns A function to change the favicon URL.
 */
const useFavicon: UseFavicon = (initialFaviconUrl: string): SetFaviconFn => {
	const [faviconUrl, setFaviconUrl] = useState<string>(initialFaviconUrl);

	useEffect(() => {
		if (!isBrowser()) return;

		const existingLink = document.querySelector(
			"link[rel='icon']"
		) as HTMLLinkElement;
		const link: HTMLLinkElement =
			existingLink || document.createElement("link");
		link.rel = "icon";
		link.href = faviconUrl;

		if (!existingLink) {
			document.head.appendChild(link);
		}
	}, [faviconUrl]);

	const changeFavicon = useCallback((newFaviconUrl: string) => {
		setFaviconUrl(newFaviconUrl);
	}, []);

	return changeFavicon;
};

export default useFavicon;
