import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import ListItemPreview from "../smart-list-block/components/ListItemPreview";

export default function Edit({ attributes, setAttributes, context }) {
	return (
		<div {...useBlockProps()}>
			<ListItemPreview
				icon={context.icon}
				title={context.title}
				description={context.description}
				presetsType={context.presetsType}
			></ListItemPreview>
		</div>
	);
}
