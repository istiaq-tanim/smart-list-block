import {
	BlockControls,
	InspectorControls,
	useBlockProps
} from "@wordpress/block-editor";
import "./editor.scss";

import { ToolbarButton, ToolbarGroup } from "@wordpress/components";
import ContentControlPanel from "./components/InspectorControl/ContentControlPanel/ContentControlPanel";
import GeneralControlPanel from "./components/InspectorControl/GeneralControlPanel/GeneralControlPanel";
import IconControlPanel from "./components/InspectorControl/IconControlPanel/IconControlPanel";
import ListPreview from "./components/ListPreview";
import BlockProvider from "./Provider/BlockProvider";

export default function Edit({ attributes, setAttributes }) {
	const { previewWidth } = attributes;
	const blockProps = useBlockProps({
		style: {
			maxWidth: previewWidth,
			margin: "0 auto",
		},
	});
	const ALLOWED_BLOCKS = ["create-block/smart-list-item"];
	const TEMPLATE = [
		["create-block/smart-list-item"],
		["create-block/smart-list-item"],
		["create-block/smart-list-item"]
	];
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

				{/* Icon Panel with Tabs */}

				<IconControlPanel></IconControlPanel>

				{/* Content Panel with Tabs */}

				<ContentControlPanel></ContentControlPanel>
			</InspectorControls>
			<div {...blockProps}>

				<ListPreview attributes={attributes}></ListPreview>
				{/* <InnerBlocks
					allowedBlocks={["create-block/smart-list-item"]}
					template={[]}
					templateLock={false}
					renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
				/> */}
			</div>
		</BlockProvider>
	);
}
