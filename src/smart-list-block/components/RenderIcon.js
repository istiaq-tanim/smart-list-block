export default function RenderIcon({ icon }) {
	if (!icon.show) return null;
	if (icon.type === "custom" && icon.imageSource) {
		return (
			<img
				src={icon.imageSource}
				alt="icon"
				style={{
					width: icon?.width || 20,
					height: icon?.height || 20,
				}}
			></img>
		);
	}
	return <div></div>;
}
