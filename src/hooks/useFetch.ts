import { useState, useEffect, useCallback } from "react";
import { isBrowser } from "../utils";

interface FetchOptions {
	method?: string;
	headers?: HeadersInit;
	body?: BodyInit | null;
}

interface FetchResult<T> {
	data: T | null;
	loading: boolean;
	error: Error | null;
	refetch: () => void;
}

/**
 * Hook to fetch data from an API endpoint.
 *
 * @param {string} url - The URL of the API endpoint.
 * @param {FetchOptions} [options] - Optional configuration for the fetch request.
 * @returns An object containing the fetched data, loading state, error state, and a refetch function.
 */
const useFetch = <T>(
	url: string,
	options: FetchOptions = {}
): FetchResult<T> => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>(null);
	const [refetch, setRefetch] = useState<boolean>(false);

	const fetchData = useCallback(async () => {
		if (!isBrowser()) return;

		setLoading(true);
		setError(null);

		try {
			const response = await fetch(url, {
				method: options.method || "GET",
				headers: options.headers,
				body: options.body,
			});

			if (!response.ok) {
				throw new Error(`Error: ${response.statusText}`);
			}

			const result = await response.json();
			setData(result);
		} catch (err) {
			setError(err as Error);
		} finally {
			setLoading(false);
		}
	}, [url, options]);

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		if (refetch) {
			fetchData();
			setRefetch(false);
		}
	}, [refetch]);

	return { data, loading, error, refetch: () => setRefetch(true) };
};

export default useFetch;
