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
  