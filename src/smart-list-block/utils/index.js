import { useSelect } from "@wordpress/data";
export const getBackgroundValue = (type, background, image) => {
	switch (type) {
		case "gradient":
			return background || "none";
		case "image":
			return image ? `url(${image})` : "";
		case "solid":
		default:
			return "none";
	}
};

export const hexToRgba = (hex, opacity) => {
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);

	return `rgba(${r}, ${g} , ${b} , ${opacity / 100})`;
};

export const useDeviceType = () => {
	const { deviceType } = useSelect((select) => {
		const coreEditor = select("core/editor");

		if (!coreEditor?.getDeviceType) {
			return { deviceType: "Desktop" };
		}

		return { deviceType: coreEditor.getDeviceType() };
	}, []);
	return deviceType || "Desktop";
};

export const getResponsiveValue = (obj, fallback = 0) =>
	obj?.[device] ?? obj?.desktop ?? fallback;

export const getResponsiveObjectValue = (obj, key, fallback = 0) =>
	obj?.[key]?.[device] ?? obj?.[key]?.desktop ?? fallback;
