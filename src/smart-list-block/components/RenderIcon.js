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
			className={`render-icon ${hasBg ? `bg-${iconStyle.type}` : ""} ${hasBorder ? "has-border" : ""
				}`}
			style={{
				"--iconSize": `${icon?.size || 20}px`,
				"--icon-color": iconStyle.iconColor || "#757575",
				"--icon-hover-color": iconStyle.iconHoverColor || "#757575",
				"--bg-color": hasBg ? iconStyle.iconBgColor : "transparent",
				"--bg-hover-color": hasBg ? iconStyle.iconHoverBgColor : "transparent",
				"--iconBorderColor": hasBorder ? iconBorderStyle?.color : "transparent",
				"--iconBorderStyle": iconBorderStyle?.style || "solid",
				"--iconBorderWidth": `${iconBorderStyle?.width || 0}px`,
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
						width: icon.width,
						height: icon.height,
						objectFit: "cover",
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
