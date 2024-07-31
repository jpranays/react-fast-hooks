import { useState, useCallback } from "react";
import { isBrowser } from "../utils";

interface CookieOptions {
	expires?: number | Date; // expires in seconds or a Date object
	path?: string; // path of the cookie
	domain?: string; // domain of the cookie
	secure?: boolean; // whether the cookie is secure
	sameSite?: "Lax" | "Strict" | "None"; // SameSite attribute
}

interface UseCookie {
	value: string | undefined;
	setCookie: (value: string, options?: CookieOptions) => void;
	removeCookie: () => void;
	hasCookie: () => boolean;
}

/**
 * Hook to manage a cookie in React state.
 *
 * @param {string} name - The name of the cookie.
 * @returns An object containing the cookie value and helper methods to interact with it.
 */
const useCookie = (name: string): UseCookie => {
	const getCookie = useCallback((): string | undefined => {
		if (isBrowser()) {
			const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
			return match ? decodeURIComponent(match[2]) : undefined;
		}
	}, [name]);

	const [value, setValue] = useState<string | undefined>(
		isBrowser() ? getCookie() : undefined
	);

	const setCookie = useCallback(
		(value: string, options: CookieOptions = {}) => {
			if (isBrowser()) {
				let cookieString = `${name}=${encodeURIComponent(value)}`;

				if (options.expires) {
					const expires =
						options.expires instanceof Date
							? options.expires
							: new Date(Date.now() + options.expires * 1000);
					cookieString += `; expires=${expires.toUTCString()}`;
				}

				if (options.path) {
					cookieString += `; path=${options.path}`;
				}

				if (options.domain) {
					cookieString += `; domain=${options.domain}`;
				}

				if (options.secure) {
					cookieString += `; secure`;
				}

				if (options.sameSite) {
					cookieString += `; samesite=${options.sameSite}`;
				}

				document.cookie = cookieString;
				setValue(value);
			}
		},
		[name]
	);

	const removeCookie = useCallback(() => {
		setCookie("", { expires: -1 });
	}, [setCookie]);

	const hasCookie = useCallback((): boolean => {
		return isBrowser() && getCookie() !== undefined;
	}, [getCookie]);

	return {
		value,
		setCookie,
		removeCookie,
		hasCookie,
	};
};

export default useCookie;
