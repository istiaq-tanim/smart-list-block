import { getIcon } from "../const/icons";

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
	if (icon.type === "iconSet" && icon.iconSourceId) {
		const { component } = getIcon(icon.iconSourceId);
		const IconComponent = component;
		return <IconComponent size={24} color="#757575" />;
	}
}
