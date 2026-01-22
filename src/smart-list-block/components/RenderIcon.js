import { getIcon } from "../const/icons";

export default function RenderIcon({ icon, iconStyle }) {
	const hasBg = iconStyle?.show;
	if (!icon?.show) return null;
	return (
		<div
			className={`render-icon ${hasBg ? `bg-${iconStyle.type}` : ""}`}
			style={{
				"--iconSize": `${icon?.size || 20}px`,
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
		</div>
	);
}
