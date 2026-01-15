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
								<strong>{item.title}</strong>
								{presetsType !== "list" && (
									<p
										style={{
											margin: "5px 0 0",
											fontSize: "14px",
											color: "#666",
										}}
									>
										{item.description}
									</p>
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
