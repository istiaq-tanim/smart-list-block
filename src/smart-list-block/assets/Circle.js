function Circle({ fill }) {
	console.log(fill);
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill={fill}
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="12" cy="12" r="11.5" fill={fill} stroke="#DDDDDD" />
		</svg>
	);
}

export default Circle;
