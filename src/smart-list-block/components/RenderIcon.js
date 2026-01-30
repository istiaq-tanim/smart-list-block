import { getIcon } from "../const/icons";
import { getResponsiveSpacing, useDeviceType } from "../utils";

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

	const getResponsiveSpacing = (
		spacingObj,
		fallback = { top: 0, right: 0, bottom: 0, left: 0 },
	) => {
		if (spacingObj?.[device]) {
			return spacingObj[device];
		}
		if (spacingObj?.desktop) {
			return spacingObj.desktop;
		}
		return fallback;
	};

	// Get responsive spacing values
	const responsivePadding = getResponsiveSpacing(paddingIcon);
	const responsiveRadius = getResponsiveSpacing(radiusIcon);

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
				"--iconPaddingTop": `${responsivePadding.top}px` || "10px",
				"--iconPaddingRight": `${responsivePadding.right}px` || "10px",
				"--iconPaddingBottom": `${responsivePadding.bottom}px` || "10px",
				"--iconPaddingLeft": `${responsivePadding.left}px` || "10px",
				"--iconRadiusTop": `${responsiveRadius.top}px`,
				"--iconRadiusRight": `${responsiveRadius.right}px`,
				"--iconRadiusBottom": `${responsiveRadius.bottom}px`,
				"--iconRadiusLeft": `${responsiveRadius.left}px`,
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
