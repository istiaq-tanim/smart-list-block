function Diamond({ size = 16, color = "currentColor" }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 20 23"
			fill="none"
			style={{ color }}
		>
			<path
				d="M9.68377 0L19.3675 5.59091V16.7727L9.68377 22.3636L3.24249e-05 16.7727V5.59091L9.68377 0Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default Diamond;
