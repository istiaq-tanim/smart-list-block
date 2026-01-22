import { getIcon } from "../const/icons";

export default function RenderIcon({ icon, iconStyle }) {
	const hasBg = iconStyle?.show;
	if (!icon?.show) return null;
	return (
		<div
			className={`render-icon ${hasBg ? `bg-${iconStyle.type}` : ""}`}
			style={{
				"--iconSize": `${icon?.size || 20}px`,
				"--icon-color": iconStyle.iconColor || "#757575",
				"--icon-hover-color": iconStyle.iconHoverColor || "#757575",
				"--bg-color": hasBg ? iconStyle.iconBgColor : "#EEEEEE",
				"--bg-hover-color": hasBg ? iconStyle.iconHoverBgColor : "#EEEEEE",
				padding: "10px",
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
					return <IconComponent size={icon.size || 20} color="currentColor" />;
				})()}
		</div>
	);
}
