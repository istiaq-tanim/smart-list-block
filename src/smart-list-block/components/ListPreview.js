import ListClickIcon from "../assets/ListClickIcon";
import { listItems } from "../const";
import useBlockContext from "../hooks/useBlockContext";
import { getBackgroundValue, hexToRgba } from "../utils";
import RenderIcon from "./RenderIcon";
function ListPreview() {
	const { attributes } = useBlockContext();
	const {
		listOrientation,
		alignment,
		presetsType,
		spaceBetween,
		iconGap,
		divider,
		backgroundStyle,
		color: textColor,
		border,
		padding,
		margin,
		radius,
		title,
		description,
		contentEffect,
		gapTitleToDescription,
		icon,
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
	const TitleTag = title?.tags === "p" ? "p" : title?.tags;
	const DescriptionTag = description?.tags === "p" ? "p" : description?.tags;

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
					"--color": textColor,
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
					"--titleColor": `${title.color}`,
					"--descriptionFontSize": `${description.fontSize}px`,
					"--descriptionWeight": `${description.weight}`,
					"--descriptionFont": `${description.family}`,
					"--descriptionSpacing": `${description.spacing}px`,
					"--descriptionHeight": `${description.height}`,
					"--descriptionColor": `${description.color}`,
					"--gapBetweenTitleAndDescription": `${gapTitleToDescription}px`,
					"--backgroundImage":
						type === "image" && image ? `url(${image})` : "none",
					"--backgroundGradient":
						type === "gradient" && background ? background : "none",
					"--backgroundSize": type === "image" ? backgroundSize : "auto",
					"--overlayColor":
						backgroundOverlay?.enabled && type === "image"
							? hexToRgba(
									backgroundOverlay.color || "#f05e31",
									backgroundOverlay.opacity || 50,
							  )
							: "transparent",
				}}
			>
				{listItems.map((item, index) => {
					return (
						<li
							className={`smart-item icon-${icon.position} icon-align-${
								icon.alignment || "center"
							}`}
							key={index}
						>
							<RenderIcon icon={icon}></RenderIcon>
							<div className="list-content">
								{title.show && (
									<TitleTag
										className={
											title?.tags === "p" ? "title" : "title-without-size"
										}
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
				})}
			</ul>
		</div>
	);
}

export default ListPreview;
