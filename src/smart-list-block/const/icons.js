export const customIcons = {
	smile: {
		name: "Smile",
		component: ({ size = 24, color = "currentColor", strokeWidth = 2 }) => (
			<svg
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				stroke={color}
				strokeWidth={strokeWidth}
			>
				<circle cx="12" cy="12" r="10" />
				<path d="M8 14s1.5 2 4 2 4-2 4-2" />
				<line x1="9" y1="9" x2="9.01" y2="9" />
				<line x1="15" y1="9" x2="15.01" y2="9" />
			</svg>
		),
	},
	star: {
		name: "Star",
		component: ({ size = 24, color = "currentColor" }) => (
			<svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
				<polygon points="12 2 15.09 10.26 24 10.26 17.55 16.61 19.64 24.88 12 19.53 4.36 24.88 6.45 16.61 0 10.26 8.91 10.26 12 2" />
			</svg>
		),
	},
	heart: {
		name: "Heart",
		component: ({ size = 24, color = "currentColor" }) => (
			<svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
				<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
			</svg>
		),
	},
	circle: {
		name: "Circle",
		component: ({ size = 24, color = "currentColor", strokeWidth = 2 }) => (
			<svg
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				stroke={color}
				strokeWidth={strokeWidth}
			>
				<circle cx="12" cy="12" r="10" />
			</svg>
		),
	},
	square: {
		name: "Square",
		component: ({ size = 24, color = "currentColor", strokeWidth = 2 }) => (
			<svg
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				stroke={color}
				strokeWidth={strokeWidth}
			>
				<rect x="3" y="3" width="18" height="18" />
			</svg>
		),
	},
	triangle: {
		name: "Triangle",
		component: ({ size = 24, color = "currentColor" }) => (
			<svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
				<polygon points="12 2 22 20 2 20 12 2" />
			</svg>
		),
	},
	check: {
		name: "Check",
		component: ({ size = 24, color = "currentColor", strokeWidth = 2 }) => (
			<svg
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				stroke={color}
				strokeWidth={strokeWidth}
			>
				<polyline points="20 6 9 17 4 12" />
			</svg>
		),
	},
	x: {
		name: "Close",
		component: ({ size = 24, color = "currentColor", strokeWidth = 2 }) => (
			<svg
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				stroke={color}
				strokeWidth={strokeWidth}
			>
				<line x1="18" y1="6" x2="6" y2="18" />
				<line x1="6" y1="6" x2="18" y2="18" />
			</svg>
		),
	},
	arrow: {
		name: "Arrow",
		component: ({ size = 24, color = "currentColor", strokeWidth = 2 }) => (
			<svg
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				stroke={color}
				strokeWidth={strokeWidth}
			>
				<line x1="5" y1="12" x2="19" y2="12" />
				<polyline points="12 5 19 12 12 19" />
			</svg>
		),
	},
	settings: {
		name: "Settings",
		component: ({ size = 24, color = "currentColor", strokeWidth = 2 }) => (
			<svg
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				stroke={color}
				strokeWidth={strokeWidth}
			>
				<circle cx="12" cy="12" r="3" />
				<path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m2.98 2.98l4.24 4.24M1 12h6m6 0h6m-3.78 7.78l-4.24-4.24m-2.98-2.98l-4.24-4.24" />
			</svg>
		),
	},
	bell: {
		name: "Bell",
		component: ({ size = 24, color = "currentColor", strokeWidth = 2 }) => (
			<svg
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				stroke={color}
				strokeWidth={strokeWidth}
			>
				<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
				<path d="M13.73 21a2 2 0 0 1-3.46 0" />
			</svg>
		),
	},
	bookmark: {
		name: "Bookmark",
		component: ({ size = 24, color = "currentColor", strokeWidth = 2 }) => (
			<svg
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				stroke={color}
				strokeWidth={strokeWidth}
			>
				<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
			</svg>
		),
	},
	calendar: {
		name: "Calendar",
		component: ({ size = 24, color = "currentColor", strokeWidth = 2 }) => (
			<svg
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				stroke={color}
				strokeWidth={strokeWidth}
			>
				<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
				<line x1="16" y1="2" x2="16" y2="6" />
				<line x1="8" y1="2" x2="8" y2="6" />
				<line x1="3" y1="10" x2="21" y2="10" />
			</svg>
		),
	},
};

export const getIcons = () => {
	return Object.keys(customIcons).map((key) => ({
		id: key,
		...customIcons[key],
	}));
};

export const getIcon = (iconId) => {
	return customIcons[iconId] || null;
};
