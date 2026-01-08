import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import GeneralControlPanel from "./components/InspectorControl/GeneralControlPanel/GeneralControlPanel";

export default function Edit() {
	return (
		<>
			<InspectorControls>
				{/* General Panel with Tabs */}
				<GeneralControlPanel></GeneralControlPanel>
			</InspectorControls>
			<div {...useBlockProps()}>
				{__("Smart List Block – hello from the editor!", "smart-list-block")}
			</div>
		</>
	);
}
