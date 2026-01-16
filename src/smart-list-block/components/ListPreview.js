import ListClickIcon from "../assets/ListClickIcon";
import { listItems } from "../const";
import useBlockContext from "../hooks/useBlockContext";
import { getBackgroundValue, hexToRgba } from "../utils";
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
	const TitleTag = title?.tags || "p";

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
				className={`smart-list ${orientationClass} ${alignmentClass} ${dividerClass} ${borderClass}`}
				style={{
					"--spaceBetween": `${spaceBetween}px`,
					"--color": textColor,
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
					"--descriptionFontSize": `${description.fontSize}px`,
					"--descriptionWeight": `${description.weight}`,
					"--descriptionFont": `${description.family}`,
					"--descriptionSpacing": `${description.spacing}px`,
					"--descriptionHeight": `${description.height}`,
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
						<li className="smart-item" key={index}>
							<ListClickIcon></ListClickIcon>
							<div>
								{title.show && (
									<TitleTag className="title">{item.title}</TitleTag>
								)}
								{(presetsType !== "list" || description.show) && (
									<p className="description">{item.description}</p>
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
