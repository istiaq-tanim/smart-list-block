function Triangle({ size = 16, color = "currentColor" }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 23 23"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ color }}
		>
			<rect
				y="11.2263"
				width="15.8763"
				height="15.8763"
				transform="rotate(-45 0 11.2263)"
				fill="currentColor"
			/>
		</svg>
	);
}

export default Triangle;
