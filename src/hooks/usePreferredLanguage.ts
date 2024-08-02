import { useState, useEffect } from "react";
import { isBrowser } from "../utils";

interface UsePreferredLanguage {
	language: string;
	languages: Array<string>;
	isSupported: boolean;
}

/**
 * Hook to get the user's preferred language from the browser.
 *
 * @returns {UsePreferredLanguage} An object containing the preferred language and a boolean indicating support.
 */
const usePreferredLanguage = (): UsePreferredLanguage => {
	const [language, setLanguage] = useState<string>(
		isBrowser() ? navigator.language : ""
	);
	const [languages, setLanguages] = useState<Array<string>>(
		isBrowser() ? Array.from(navigator.languages) : []
	);
	const [isSupported, setIsSupported] = useState<boolean>(
		isBrowser() && !!navigator.language
	);

	useEffect(() => {
		if (isBrowser()) {
			if (navigator.language) {
				setLanguage(navigator.language);
				setIsSupported(true);
			}
			if (navigator.languages && navigator.languages.length > 0) {
				setLanguages(Array.from(navigator.languages));
				setIsSupported(true);
			} else {
				setIsSupported(false);
			}
		} else {
			setIsSupported(false);
		}
	}, []);

	return {
		language,
		languages,
		isSupported,
	};
};

export default usePreferredLanguage;
