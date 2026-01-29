import { RichText } from "@wordpress/block-editor";
import RenderIcon from "./RenderIcon";

function ListItemPreview({
	icon,
	iconStyle,
	title,
	description,
	presetsType,
	iconBorderStyle,
	paddingIcon,
	radiusIcon,
	attributes,
	setAttributes,
}) {
	const TitleTag = title?.tags === "p" ? "p" : title?.tags || "p";
	const DescriptionTag =
		description?.tags === "p" ? "p" : description?.tags || "p";

	const { titleText, descriptionText } = attributes;

	const showDescription = presetsType !== "list" || description?.show === true;

	return (
		<>
			<RenderIcon
				icon={icon}
				iconStyle={iconStyle}
				iconBorderStyle={iconBorderStyle}
				radiusIcon={radiusIcon}
				paddingIcon={paddingIcon}
			/>

			<div className="list-content">
				{title.show && (
					<RichText
						tagName={TitleTag}
						className={TitleTag === "p" ? "title" : "title-without-size"}
						value={titleText}
						onChange={(value) => setAttributes({ titleText: value })}
						placeholder="Title..."
					/>
				)}

				{showDescription && (
					<RichText
						tagName={DescriptionTag}
						className={
							DescriptionTag === "p"
								? "description"
								: "description-without-size"
						}
						value={descriptionText}
						onChange={(value) => setAttributes({ descriptionText: value })}
						placeholder="Description..."
					/>
				)}
			</div>
		</>
	);
}

export default ListItemPreview;
