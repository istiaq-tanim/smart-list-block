import { __ } from "@wordpress/i18n";
import {
	BlockControls,
	InspectorControls,
	useBlockProps,
} from "@wordpress/block-editor";
import "./editor.scss";

import GeneralControlPanel from "./components/InspectorControl/GeneralControlPanel/GeneralControlPanel";
import ListPreview from "./components/ListPreview";
import BlockProvider from "./Provider/BlockProvider";
import { ToolbarGroup } from "@wordpress/components";
import { ToolbarButton } from "@wordpress/components";
import ContentControlPanel from "./components/InspectorControl/ContentControlPanel/ContentControlPanel";

export default function Edit({ attributes, setAttributes }) {
	const { previewWidth } = attributes;
	const blockProps = useBlockProps({
		style: {
			maxWidth: previewWidth,
			margin: "0 auto",
		},
	});
	return (
		<BlockProvider attributes={attributes} setAttributes={setAttributes}>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="align-center"
						label="Default"
						isActive={previewWidth === "100%"}
						onClick={() => setAttributes({ previewWidth: "100%" })}
					/>

					<ToolbarButton
						icon="align-wide"
						label="Wide"
						isActive={previewWidth === "1200px"}
						onClick={() => setAttributes({ previewWidth: "1200px" })}
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				{/* General Panel with Tabs */}
				<GeneralControlPanel></GeneralControlPanel>

				{/* Content Panel with Tabs */}

				<ContentControlPanel></ContentControlPanel>
			</InspectorControls>
			<div {...blockProps}>
				<ListPreview></ListPreview>
			</div>
		</BlockProvider>
	);
}
