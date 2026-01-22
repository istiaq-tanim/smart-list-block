import RenderIcon from "./RenderIcon";
function ListItemPreview({
	item = { title: "List Item", description: "This is the list Description" },
	icon,
	title,
	description,
	presetsType,
	iconStyle,
}) {
	const TitleTag = title?.tags === "p" ? "p" : title?.tags;
	const DescriptionTag = description?.tags === "p" ? "p" : description?.tags;

	return (
		<li
			className={`smart-item icon-${icon.position} icon-align-${
				icon.alignment || "center"
			}`}
		>
			<RenderIcon icon={icon} iconStyle={iconStyle} />
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
}

export default ListItemPreview;
