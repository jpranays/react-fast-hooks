export const isBrowser = (): boolean => {
	return typeof window !== "undefined" && typeof window.document !== "undefined"
		? true
		: false;
};

export const throttle = (func: Function, wait: number) => {
	let timeout: NodeJS.Timeout | null = null;
	return function (this: any, ...args: any[]) {
		if (timeout) return;
		timeout = setTimeout(() => {
			func.apply(this, args);
			timeout = null;
		}, wait);
	};
};

export function debounce(func: Function, delay: number) {
	let timeoutId: ReturnType<typeof setTimeout>;

	return function (...args: any[]) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func(...args);
		}, delay);
	};
}
