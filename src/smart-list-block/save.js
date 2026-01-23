import { useBlockProps } from "@wordpress/block-editor";
import { customIcons } from "./const/icons";
import { hexToRgba } from "./utils";

function save({ attributes }) {
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
		lists,
	} = attributes;

	const { width, style, color, show } = divider;
	const {
		width: borderWidth,
		style: borderStyle,
		color: borderColor,
		show: borderShow,
	} = border;
	const { background, image, type, backgroundSize, backgroundOverlay } =
		backgroundStyle;

	const orientationClass = `is-${listOrientation || "vertical"}`;
	const alignmentClass = `alignment-${alignment || "left"}`;
	const dividerClass = show ? "has-divider" : "";
	const borderClass = borderShow ? "has-border" : "";
	const hasHoverClass = contentEffect === "hover" ? "has-hover" : "has-normal";

	const blockProps = useBlockProps.save({
		className: "smart-list-wrapper",
		style: {
			"--marginTop": `${margin.top}px`,
			"--marginRight": `${margin.right}px`,
			"--marginBottom": `${margin.bottom}px`,
			"--marginLeft": `${margin.left}px`,
		},
	});

	const RenderIcon = () => {
		if (!icon?.show) return null;

		const hasBg = iconStyle?.show;
		const hasBorder = iconBorderStyle?.show;

		return (
			<div
				className={`render-icon ${hasBg ? `bg-${iconStyle.type}` : ""} ${
					hasBorder ? "has-border" : ""
				}`}
				style={{
					"--iconSize": `${icon?.size || 20}px`,
					"--icon-color": iconStyle?.iconColor || "#757575",
					"--icon-hover-color": iconStyle?.iconHoverColor || "#757575",
					"--bg-color": hasBg ? iconStyle?.iconBgColor : "#EEEEEE",
					"--bg-hover-color": hasBg ? iconStyle?.iconHoverBgColor : "#EEEEEE",
					"--iconBorderColor": iconBorderStyle?.color,
					"--iconBorderStyle": iconBorderStyle?.style,
					"--iconBorderWidth": `${iconBorderStyle?.width || 1}px`,
					"--iconPaddingTop": `${paddingIcon?.top ?? 10}px`,
					"--iconPaddingRight": `${paddingIcon?.right ?? 10}px`,
					"--iconPaddingBottom": `${paddingIcon?.bottom ?? 10}px`,
					"--iconPaddingLeft": `${paddingIcon?.left ?? 10}px`,
					"--iconRadiusTop": `${radiusIcon?.top || 0}px`,
					"--iconRadiusRight": `${radiusIcon?.right || 0}px`,
					"--iconRadiusBottom": `${radiusIcon?.bottom || 0}px`,
					"--iconRadiusLeft": `${radiusIcon?.left || 0}px`,
				}}
			>
				{icon.type === "custom" && icon.imageSource && (
					<img
						src={icon.imageSource}
						alt=""
						style={{ width: "100%", height: "100%", objectFit: "contain" }}
					/>
				)}

				{icon.type === "iconSet" &&
					icon.iconSourceId &&
					(() => {
						const iconData = customIcons[icon.iconSourceId];
						if (iconData && iconData.component) {
							const IconComponent = iconData.component;
							return (
								<IconComponent size={icon.size || 20} color="currentColor" />
							);
						}
						return null;
					})()}
			</div>
		);
	};

	// Helper function to render individual list items
	const renderListItem = (item, index) => {
		const TitleTag = title?.tags === "p" ? "p" : title?.tags || "div";
		const DescriptionTag =
			description?.tags === "p" ? "p" : description?.tags || "div";

		return (
			<li
				key={index}
				className={`smart-item icon-${icon.position} icon-align-${
					icon.alignment || "center"
				}`}
			>
				<RenderIcon />
				<div className="list-content">
					{title.show && (
						<TitleTag
							className={title?.tags === "p" ? "title" : "title-without-size"}
						>
							{item.title}
						</TitleTag>
					)}
					{(presetsType !== "list" || description.show) && (
						<DescriptionTag
							className={
								description?.tags === "p"
									? "description"
									: "description-without-size"
							}
						>
							{item.description}
						</DescriptionTag>
					)}
				</div>
			</li>
		);
	};

	return (
		<div {...blockProps}>
			<ul
				className={`smart-list ${orientationClass} ${alignmentClass} ${dividerClass} ${borderClass} ${hasHoverClass}`}
				style={{
					"--spaceBetween": `${spaceBetween}px`,
					"--iconSize": `${icon.size || 20}px`,
					"--iconGap": `${iconGap}px`,
					"--dividerColor": color,
					"--dividerStyle": style,
					"--dividerWidth": `${width}`,
					"--borderColor": borderColor,
					"--borderStyle": borderStyle,
					"--borderWidth": `${borderWidth}`,
					"--paddingTop": `${padding.top}px`,
					"--paddingRight": `${padding.right}px`,
					"--paddingBottom": `${padding.bottom}px`,
					"--paddingLeft": `${padding.left}px`,
					"--radiusTop": `${radius.top}px`,
					"--radiusRight": `${radius.right}px`,
					"--radiusBottom": `${radius.bottom}px`,
					"--radiusLeft": `${radius.left}px`,
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
					"--gapBetweenTitleAndDescription": `${gapTitleToDescription}px`,
					"--backgroundColor":
						type === "solid" ? backgroundColor : "transparent",
					"--backgroundGradient": type === "gradient" ? background : "none",
					"--backgroundImage":
						type === "image" && image ? `url(${image})` : "none",
					"--overlayColor":
						type === "image" && backgroundOverlay?.enabled
							? hexToRgba(
									backgroundOverlay.color || "#000",
									backgroundOverlay.opacity || 50,
							  )
							: "transparent",
					"--backgroundSize": type === "image" ? backgroundSize : "auto",
				}}
			>
				{lists.map((item, index) => renderListItem(item, index))}
			</ul>
		</div>
	);
}

export default save;
