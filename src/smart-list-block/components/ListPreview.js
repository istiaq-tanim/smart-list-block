import ListClickIcon from "../assets/ListClickIcon";
import { listItems } from "../const";
import useBlockContext from "../hooks/useBlockContext";
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
	} = attributes;

	const { width, style, color, show } = divider;
	const { background } = backgroundStyle;

	const orientationClass = `is-${listOrientation || "vertical"}`;
	const alignmentClass = `alignment-${alignment || "left"}`;
	const dividerClass = show ? "has-divider" : "";

	return (
		<ul
			className={`smart-list ${orientationClass} ${alignmentClass} ${dividerClass}`}
			style={{
				"--spaceBetween": `${spaceBetween}px`,
				"--iconGap": `${iconGap}px`,
				"--dividerColor": color,
				"--dividerStyle": style,
				"--dividerWidth": `${width}`,
				"--backGround": background,
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
									style={{ margin: "5px 0 0", fontSize: "14px", color: "#666" }}
								>
									{item.description}
								</p>
							)}
						</div>
					</li>
				);
			})}
		</ul>
	);
}

export default ListPreview;
