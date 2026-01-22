import React from "react";

function Square({ size = 16, color = "currentColor" }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 16 16"
			fill="none"
			style={{ color }}
		>
			<path
				d="M15.6 1.2V14.4C15.6 15.0628 15.0628 15.6 14.4 15.6H1.2C0.537192 15.6 0 15.0628 0 14.4V1.2C0 0.537192 0.537192 0 1.2 0H14.4C15.0628 0 15.6 0.537192 15.6 1.2Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default Square;
