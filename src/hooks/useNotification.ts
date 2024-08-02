import { useState, useCallback, useEffect, useRef } from "react";
import { isBrowser } from "../utils";

interface NotificationOptions {
	body?: string;
	icon?: string;
	dir?: NotificationDirection;
	lang?: string;
	tag?: string;
	renotify?: boolean;
	silent?: boolean;
	requireInteraction?: boolean;
	badge?: string;
	vibrate?: number | number[];
	timestamp?: number;
	image?: string;
}

interface UseNotificationReturn {
	permission: NotificationPermission;
	showNotification: () => void;
	requestPermission: () => void;
	updateNotification: (
		newTitle: string,
		newOptions?: NotificationOptions
	) => void;
}

/**
 * Hook to trigger browser notifications.
 *
 * @param {string} title - The title of the notification.
 * @param {NotificationOptions} [options] - Optional configuration for the notification.
 * @returns An object containing the notification permission status and functions to trigger, request permission, and update the notification.
 */
const useNotification = (
	title: string,
	options: NotificationOptions = {}
): UseNotificationReturn => {
	const [permission, setPermission] = useState<NotificationPermission>(
		isBrowser() ? Notification.permission : "default"
	);
	const notificationRef = useRef<Notification | null>(null);

	const requestPermission = useCallback(async () => {
		if (!isBrowser()) return;
		const result = await Notification.requestPermission();
		setPermission(result);
	}, []);

	const showNotification = useCallback(() => {
		if (!isBrowser() || permission !== "granted") return;

		notificationRef.current = new Notification(title, options);
	}, [permission, title, options]);

	const updateNotification = useCallback(
		(newTitle: string, newOptions: NotificationOptions = {}) => {
			if (!isBrowser() || permission !== "granted") return;

			notificationRef.current?.close();
			notificationRef.current = new Notification(newTitle, newOptions);
		},
		[permission]
	);

	useEffect(() => {
		if (isBrowser() && permission === "default") {
			requestPermission();
		}
	}, [permission, requestPermission]);

	return {
		permission,
		showNotification,
		requestPermission,
		updateNotification,
	};
};

export default useNotification;
