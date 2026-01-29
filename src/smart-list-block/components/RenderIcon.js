import { getIcon } from "../const/icons";
import { useDeviceType } from "../utils";

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

	const device = useDeviceType()?.toLowerCase() || "desktop";

	const getResponsiveValue = (obj, fallback = 0) =>
		obj?.[device] ?? obj?.desktop ?? fallback;

	const getResponsiveObjectValue = (obj, key, fallback = 0) =>
		obj?.[key]?.[device] ?? obj?.[key]?.desktop ?? fallback;

	const iconWidth = getResponsiveObjectValue(icon, "width");
	const iconHeight = getResponsiveObjectValue(icon, "height");

	return (
		<div
			className={`render-icon ${hasBg ? `bg-${iconStyle.type}` : ""} ${
				hasBorder ? "has-border" : ""
			}`}
			style={{
				"--iconSize": `${getResponsiveObjectValue(icon, "size")}px`,
				"--icon-color": iconStyle.iconColor || "#757575",
				"--icon-hover-color": iconStyle.iconHoverColor || "#757575",
				"--bg-color": hasBg ? iconStyle.iconBgColor : "transparent",
				"--bg-hover-color": hasBg ? iconStyle.iconHoverBgColor : "transparent",
				"--iconBorderColor": hasBorder ? iconBorderStyle?.color : "transparent",
				"--iconBorderStyle": iconBorderStyle?.style || "solid",
				"--iconBorderWidth": `${getResponsiveObjectValue(
					iconBorderStyle,
					"width",
				)}px`,
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
						width: iconWidth ? `${iconWidth}px` : undefined,
						height: iconHeight ? `${iconHeight}px` : undefined,
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
