import { getIcon } from "../const/icons";

export default function RenderIcon({
	icon,
	iconStyle,
	iconBorderStyle,
	paddingIcon,
	radiusIcon,
}) {
	const hasBg = iconStyle?.show;
	const hasBorder = iconBorderStyle.show;
	if (!icon?.show) return null;
	return (
		<div
			className={`render-icon ${hasBg ? `bg-${iconStyle.type}` : ""} ${
				hasBorder ? "has-border" : ""
			}`}
			style={{
				"--iconSize": `${icon?.size || 20}px`,
				"--icon-color": iconStyle.iconColor || "#757575",
				"--icon-hover-color": iconStyle.iconHoverColor || "#757575",
				"--bg-color": hasBg ? iconStyle.iconBgColor : "#EEEEEE",
				"--bg-hover-color": hasBg ? iconStyle.iconHoverBgColor : "#EEEEEE",
				"--iconBorderColor": iconBorderStyle.color,
				"--iconBorderStyle": iconBorderStyle.style,
				"--iconBorderWidth": `${iconBorderStyle.width || 1}px`,
				"--iconPaddingTop": `${paddingIcon.top}px` || "10px",
				"--iconPaddingRight": `${paddingIcon.right}px` || "10px",
				"--iconPaddingBottom": `${paddingIcon.bottom}px` || "10px",
				"--iconPaddingLeft": `${paddingIcon.left}px` || "10px",
				"--iconRadiusTop": `${radiusIcon.top}px`,
				"--iconRadiusRight": `${radiusIcon.right}px`,
				"--iconRadiusBottom": `${radiusIcon.bottom}px`,
				"--iconRadiusLeft": `${radiusIcon.left}px`,
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
