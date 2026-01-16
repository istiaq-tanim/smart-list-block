function Typo({ onClick, active }) {
	const strokeColor = active ? "#6f22dd" : "#2F2F2F";
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onClick={onClick}
		>
			<rect
				x="0.8"
				y="0.8"
				width="22.4"
				height="22.4"
				rx="3.2"
				stroke={strokeColor}
				stroke-width="1.6"
			/>
			<path
				d="M13.0315 16.75L11.0684 11.1504C10.1567 8.55012 9.70094 7.25 8.9601 7.25C8.21926 7.25 7.76345 8.55012 6.85184 11.1504L4.88867 16.75M6.5851 12H11.3351"
				stroke={strokeColor}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M19.0884 13.3159V16.3695M19.0884 13.3159C19.1204 12.7574 19.1217 12.3319 19.0546 11.9846C18.8965 11.166 18.0411 10.6727 17.2134 10.5723C16.4212 10.4763 15.7853 10.6802 15.142 11.6175M19.0884 13.3159H17.1588C16.8624 13.3159 16.5634 13.3302 16.2778 13.4096C14.532 13.8949 14.66 16.3431 16.4108 16.6449C16.6053 16.6784 16.8039 16.6928 17.0008 16.6839C17.4606 16.6634 17.8848 16.4413 18.249 16.1597C18.6754 15.8299 19.0884 15.3695 19.0884 14.6731V13.3159Z"
				stroke={strokeColor}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default Typo;
