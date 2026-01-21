import { getIcon } from "../const/icons";

export default function RenderIcon({ icon }) {
	if (!icon?.show) return null;

	return (
		<span
			className="render-icon"
			style={{
				width: icon?.width || icon?.size || 20,
				height: icon?.height || icon?.size || 20,
			}}
		>
			{icon.type === "custom" && icon.imageSource && (
				<img
					src={icon.imageSource}
					alt="icon"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "contain",
					}}
				/>
			)}

			{icon.type === "iconSet" &&
				icon.iconSourceId &&
				(() => {
					const { component } = getIcon(icon.iconSourceId);
					const IconComponent = component;
					return (
						<IconComponent
							size={icon.size || 20}
							color={icon.color || "#757575"}
						/>
					);
				})()}
		</span>
	);
}
