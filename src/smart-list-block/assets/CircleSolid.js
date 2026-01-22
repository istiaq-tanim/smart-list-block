function CircleSolid({ size = 16, color = "currentColor" }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ color }}
		>
			<circle cx="10.7143" cy="10.7143" r="10.7143" fill="currentColor" />
		</svg>
	);
}

export default CircleSolid;
