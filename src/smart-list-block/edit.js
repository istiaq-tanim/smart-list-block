import { __ } from "@wordpress/i18n";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import "./editor.scss";
import GeneralControlPanel from "./components/InspectorControl/GeneralControlPanel/GeneralControlPanel";
import ListPreview from "./components/ListPreview";

export default function Edit() {
	return (
		<>
			<InspectorControls>
				{/* General Panel with Tabs */}
				<GeneralControlPanel></GeneralControlPanel>
			</InspectorControls>
			<div {...useBlockProps()}>
				<ListPreview></ListPreview>
			</div>
		</>
	);
}
