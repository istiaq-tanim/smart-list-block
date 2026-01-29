import { hexToRgba, useDeviceType } from "../utils";
import { InnerBlocks } from "@wordpress/block-editor";

function ListPreview({ attributes }) {
	const {
		listOrientation,
		alignment,
		spaceBetween,
		iconGap,
		divider,
		backgroundStyle,
		color: backgroundColor,
		border,
		padding,
		margin,
		radius,
		title,
		description,
		contentEffect,
		gapTitleToDescription,
		backgroundOverlay,
	} = attributes;

	const ALLOWED_BLOCKS = ["create-block/smart-list-item"];
	const TEMPLATE = [
		["create-block/smart-list-item"],
		["create-block/smart-list-item"],
		["create-block/smart-list-item"],
	];

	const { width, style, color, show } = divider;
	const {
		width: borderWidth,
		style: borderStyle,
		color: borderColor,
		show: borderShow,
	} = border;
	const { background, image, type, backgroundSize } = backgroundStyle;

	const orientationClass = `is-${listOrientation || "vertical"}`;
	const alignmentClass = `alignment-${alignment || "left"}`;
	const dividerClass = show ? "has-divider" : "";
	const borderClass = borderShow ? "has-border" : "";
	const hasHoverClass = contentEffect === "hover" ? "has-hover" : "has-normal";

	const device = useDeviceType()?.toLowerCase() || "desktop";

	const getResponsiveValue = (obj, fallback = 0) =>
		obj?.[device] ?? obj?.desktop ?? fallback;

	const getResponsiveObjectValue = (obj, key, fallback = 0) =>
		obj?.[key]?.[device] ?? obj?.[key]?.desktop ?? fallback;

	// NEW: Helper to get responsive spacing values
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

	const overlayOpacity = getResponsiveValue(backgroundOverlay?.opacity, 50);

	// Get responsive spacing values
	const responsivePadding = getResponsiveSpacing(padding);
	const responsiveMargin = getResponsiveSpacing(margin);
	const responsiveRadius = getResponsiveSpacing(radius);

	return (
		<div
			style={{
				"--marginTop": `${responsiveMargin.top}px`,
				"--marginRight": `${responsiveMargin.right}px`,
				"--marginBottom": `${responsiveMargin.bottom}px`,
				"--marginLeft": `${responsiveMargin.left}px`,
			}}
			class="smart-list-wrapper"
		>
			<ul
				className={`smart-list ${orientationClass} ${alignmentClass} ${dividerClass} 
				${borderClass} ${hasHoverClass} `}
				style={{
					"--spaceBetween": `${getResponsiveValue(spaceBetween)}px`,
					"--iconGap": `${getResponsiveValue(iconGap)}px`,
					"--dividerColor": color,
					"--dividerStyle": style,
					"--dividerWidth": `${getResponsiveObjectValue(divider, "width")}px`,
					"--borderColor": borderColor,
					"--borderStyle": borderStyle,
					"--borderWidth": `${getResponsiveObjectValue(border, "width")}px`,
					"--paddingTop": `${responsivePadding.top}px`,
					"--paddingRight": `${responsivePadding.right}px`,
					"--paddingBottom": `${responsivePadding.bottom}px`,
					"--paddingLeft": `${responsivePadding.left}px`,
					"--radiusTop": `${responsiveRadius.top}px`,
					"--radiusRight": `${responsiveRadius.right}px`,
					"--radiusBottom": `${responsiveRadius.bottom}px`,
					"--radiusLeft": `${responsiveRadius.left}px`,
					"--fontSize": `${title.fontSize}px`,
					"--weight": `${title.weight}`,
					"--font": `${title.family}`,
					"--spacing": `${title.spacing}px`,
					"--height": `${title.height}`,
					"--titleColor": `${title.titleColor}`,
					"--titleHoverColor": `${title.titleHoverColor}`,
					"--descriptionFontSize": `${description.fontSize}px`,
					"--descriptionWeight": `${description.weight}`,
					"--descriptionFont": `${description.family}`,
					"--descriptionSpacing": `${description.spacing}px`,
					"--descriptionHeight": `${description.height}`,
					"--descriptionColor": `${description.descriptionColor}`,
					"--descriptionHoverColor": `${description.descriptionHoverColor}`,
					"--gapBetweenTitleAndDescription": `${getResponsiveValue(
						gapTitleToDescription,
					)}px`,
					"--backgroundColor":
						type === "solid" ? backgroundColor : "transparent",
					"--backgroundGradient": type === "gradient" ? background : "none",
					"--backgroundImage":
						type === "image" && image ? `url(${image})` : "none",
					"--overlayColor":
						type === "image" && backgroundOverlay?.enabled
							? hexToRgba(backgroundOverlay.color || "#000", overlayOpacity)
							: "transparent",

					"--backgroundSize": type === "image" ? backgroundSize : "auto",
				}}
			>
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={TEMPLATE}
					renderAppender={InnerBlocks.ButtonBlockAppender}
				/>
			</ul>
		</div>
	);
}

export default ListPreview;
