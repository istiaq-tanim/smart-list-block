import { useBlockProps } from "@wordpress/block-editor";
import ListItemPreview from "../smart-list-block/components/ListItemPreview";
import "../smart-list-block/editor.scss";

export default function Edit({ attributes, setAttributes, context }) {
	const {
		title,
		description,
		icon,
		iconStyle,
		iconBorderStyle,
		radiusIcon,
		paddingIcon,
		presetsType,
	} = context;

	const blockProps = useBlockProps({
		className: `smart-item icon-${icon?.position || "before"} icon-align-${
			icon?.alignment || "center"
		}`,
	});

	return (
		<li {...blockProps}>
			<ListItemPreview
				icon={icon}
				iconStyle={iconStyle}
				title={title}
				description={description}
				presetsType={presetsType}
				iconBorderStyle={iconBorderStyle}
				paddingIcon={paddingIcon}
				radiusIcon={radiusIcon}
				attributes={attributes}
				setAttributes={setAttributes}
			/>
		</li>
	);
}
