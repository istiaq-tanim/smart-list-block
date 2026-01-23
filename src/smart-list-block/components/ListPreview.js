import { hexToRgba } from "../utils";
import ListItemPreview from "./ListItemPreview";
function ListPreview({ attributes }) {
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

	return (
		<div
			style={{
				"--marginTop": `${margin.top}px`,
				"--marginRight": `${margin.right}px`,
				"--marginBottom": `${margin.bottom}px`,
				"--marginLeft": `${margin.left}px`,
			}}
			class="smart-list-wrapper"
		>
			<ul
				className={`smart-list ${orientationClass} ${alignmentClass} ${dividerClass} 
				${borderClass} ${hasHoverClass} `}
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
				{lists.map((item, index) => {
					return (
						<ListItemPreview
							key={index}
							item={item}
							icon={icon}
							iconStyle={iconStyle}
							title={title}
							description={description}
							presetsType={presetsType}
							iconBorderStyle={iconBorderStyle}
							paddingIcon={paddingIcon}
							radiusIcon={radiusIcon}
						/>
					);
				})}
			</ul>
		</div>
	);
}

export default ListPreview;
