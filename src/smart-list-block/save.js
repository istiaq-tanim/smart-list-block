import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { hexToRgba } from "./utils";

export default function save({ attributes }) {
	const {
		listOrientation,
		alignment,
		presetsType,
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
		icon,
		iconStyle,
		iconBorderStyle,
		paddingIcon,
		radiusIcon,
		backgroundOverlay,
		iconEffect,
	} = attributes;

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
	const hasIconHoverClass =
		iconEffect === "hover" ? "has-Icon-hover" : "has-Icon-normal";

	const blockProps = useBlockProps.save({
		className: "smart-list-wrapper",
		style: {
			/* Desktop */
			"--marginTop-desktop": `${margin?.desktop?.top ?? 0}px`,
			"--marginRight-desktop": `${margin?.desktop?.right ?? 0}px`,
			"--marginBottom-desktop": `${margin?.desktop?.bottom ?? 0}px`,
			"--marginLeft-desktop": `${margin?.desktop?.left ?? 0}px`,

			/* Tablet (fallback to desktop) */
			"--marginTop-tablet": `${
				margin?.tablet?.top ?? margin?.desktop?.top ?? 0
			}px`,
			"--marginRight-tablet": `${
				margin?.tablet?.right ?? margin?.desktop?.right ?? 0
			}px`,
			"--marginBottom-tablet": `${
				margin?.tablet?.bottom ?? margin?.desktop?.bottom ?? 0
			}px`,
			"--marginLeft-tablet": `${
				margin?.tablet?.left ?? margin?.desktop?.left ?? 0
			}px`,

			/* Mobile (fallback to tablet → desktop) */
			"--marginTop-mobile": `${
				margin?.mobile?.top ?? margin?.tablet?.top ?? margin?.desktop?.top ?? 0
			}px`,
			"--marginRight-mobile": `${
				margin?.mobile?.right ??
				margin?.tablet?.right ??
				margin?.desktop?.right ??
				0
			}px`,
			"--marginBottom-mobile": `${
				margin?.mobile?.bottom ??
				margin?.tablet?.bottom ??
				margin?.desktop?.bottom ??
				0
			}px`,
			"--marginLeft-mobile": `${
				margin?.mobile?.left ??
				margin?.tablet?.left ??
				margin?.desktop?.left ??
				0
			}px`,
		},
	});

	return (
		<div {...blockProps}>
			<ul
				className={`smart-list ${orientationClass} ${alignmentClass} ${dividerClass} ${borderClass} ${hasHoverClass} ${hasIconHoverClass}`}
				style={{
					"--spaceBetween": `${spaceBetween.desktop}px`,
					"--spaceBetweenTablet": `${spaceBetween.tablet}px`,
					"--spaceBetweenMobile": `${spaceBetween.mobile}px`,
					"--iconGap": `${iconGap.desktop}px`,
					"--iconGapTablet": `${iconGap.tablet}px`,
					"--iconGapMobile": `${iconGap.mobile}px`,
					"--dividerColor": color,
					"--dividerStyle": style,
					"--dividerWidth": `${width.desktop}px`,
					"--dividerWidthTablet": `${width.tablet}px`,
					"--dividerWidthMobile": `${width.mobile}px`,
					"--borderColor": borderColor,
					"--borderStyle": borderStyle,
					"--borderWidth": `${borderWidth.desktop}px`,
					"--borderWidthTablet": `${borderWidth.tablet}px`,
					"--borderWidthMobile": `${borderWidth.mobile}px`,
					"--paddingTop": `${padding.desktop.top}px`,
					"--paddingRight": `${padding.desktop.right}px`,
					"--paddingBottom": `${padding.desktop.bottom}px`,
					"--paddingLeft": `${padding.desktop.left}px`,
					"--paddingTopTablet": `${padding.tablet.top}px`,
					"--paddingRightTablet": `${padding.tablet.right}px`,
					"--paddingBottomTablet": `${padding.tablet.bottom}px`,
					"--paddingLeftTablet": `${padding.tablet.left}px`,
					"--paddingTopMobile": `${padding.mobile.top}px`,
					"--paddingRightMobile": `${padding.mobile.right}px`,
					"--paddingBottomMobile": `${padding.mobile.bottom}px`,
					"--paddingLeftMobile": `${padding.mobile.left}px`,
					"--radiusTop": `${radius?.desktop?.top ?? 0}px`,
					"--radiusRight": `${radius?.desktop?.right ?? 0}px`,
					"--radiusBottom": `${radius?.desktop?.bottom ?? 0}px`,
					"--radiusLeft": `${radius?.desktop?.left ?? 0}px`,
					"--radiusTopTablet": `${radius?.tablet?.top ?? 0}px`,
					"--radiusRightTablet": `${radius?.tablet?.right ?? 0}px`,
					"--radiusBottomTablet": `${radius?.tablet?.bottom ?? 0}px`,
					"--radiusLeftTablet": `${radius?.tablet?.left ?? 0}px`,
					"--radiusTopMobile": `${radius?.mobile?.top ?? 0}px`,
					"--radiusRightMobile": `${radius?.mobile?.right ?? 0}px`,
					"--radiusBottomMobile": `${radius?.mobile?.bottom ?? 0}px`,
					"--radiusLeftMobile": `${radius?.mobile?.left ?? 0}px`,

					"--gapBetweenTitleAndDescription": `${gapTitleToDescription.desktop}px`,
					"--gapBetweenTitleAndDescriptionTablet": `${gapTitleToDescription.tablet}px`,
					"--gapBetweenTitleAndDescriptionMobile": `${gapTitleToDescription.mobile}px`,
					"--backgroundColor":
						type === "solid" ? backgroundColor : "transparent",
					"--backgroundGradient": type === "gradient" ? background : "none",
					"--backgroundImage":
						type === "image" && image ? `url(${image})` : "none",
					"--overlayColor":
						type === "image" && backgroundOverlay?.enabled
							? hexToRgba(
									backgroundOverlay.color || "#000",
									backgroundOverlay.opacity?.desktop ?? 50,
							  )
							: "transparent",
					"--overlayColorTablet":
						type === "image" && backgroundOverlay?.enabled
							? hexToRgba(
									backgroundOverlay.color || "#000",
									backgroundOverlay.opacity?.tablet ?? 50,
							  )
							: "transparent",
					"--backgroundSize": type === "image" ? backgroundSize : "auto",
					"--overlayColorMobile":
						type === "image" && backgroundOverlay?.enabled
							? hexToRgba(
									backgroundOverlay.color || "#000",
									backgroundOverlay.opacity?.mobile ?? 50,
							  )
							: "transparent",

					"--showIcon": icon.show ? "flex" : "none",
					"--iconType": icon.type || "iconSet",
					"--iconSource":
						icon.type === "image" ? icon.imageSource : icon.iconSourceId,
					"--iconWidth": `${icon.width?.desktop || 24}px`,
					"--iconWidthTablet": `${icon.width?.tablet || 24}px`,
					"--iconWidthMobile": `${icon.width?.mobile || 24}px`,
					"--iconHeight": `${icon.height?.desktop || 24}px`,
					"--iconHeightTablet": `${icon.height?.tablet || 24}px`,
					"--iconHeightMobile": `${icon.height?.mobile || 24}px`,
					"--iconSize": `${icon.size?.desktop || 24}px`,
					"--iconSizeTablet": `${icon.size?.tablet || 24}px`,
					"--iconSizeMobile": `${icon.size?.mobile || 24}px`,

					"--iconBgColor": iconStyle.iconBgColor || "transparent",
					"--iconHoverBgColor": iconStyle.iconHoverBgColor || "transparent",
					"--iconColor": iconStyle.iconColor || "#757575",
					"--iconHoverColor": iconStyle.iconHoverColor || "#757575",
					"--showIconStyle": iconStyle.show ? "block" : "none",

					"--iconPaddingTop": `${paddingIcon.top}px`,
					"--iconPaddingRight": `${paddingIcon.right}px`,
					"--iconPaddingBottom": `${paddingIcon.bottom}px`,
					"--iconPaddingLeft": `${paddingIcon.left}px`,
					"--iconRadiusTop": `${radiusIcon.top}px`,
					"--iconRadiusRight": `${radiusIcon.right}px`,
					"--iconRadiusBottom": `${radiusIcon.bottom}px`,
					"--iconRadiusLeft": `${radiusIcon.left}px`,

					"--titleShow": title.show ? "block" : "none",
					"--titleFamily": title.family,
					"--titleFontSize": `${title.fontSize}px`,
					"--titleWeight": title.weight,
					"--titleHeight": title.height,
					"--titleSpacing": `${title.spacing}px`,
					"--titleColor": title.titleColor,
					"--titleHoverColor": title.titleHoverColor,

					"--descriptionShow": description.show ? "block" : "none",
					"--descriptionFamily": description.family,
					"--descriptionFontSize": `${description.fontSize}px`,
					"--descriptionWeight": description.weight,
					"--descriptionHeight": description.height,
					"--descriptionSpacing": `${description.spacing}px`,
					"--descriptionColor": description.descriptionColor,
					"--descriptionHoverColor": description.descriptionHoverColor,
				}}
			>
				<InnerBlocks.Content />
			</ul>
		</div>
	);
}
