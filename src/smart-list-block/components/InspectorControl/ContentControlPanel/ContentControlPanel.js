import { PanelBody } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import Tabs from "../common/Tabs/Tabs";
import { contentTabItems } from "../../../const";
import General from "./General/General";
import Style from "./Style/Style";

function ContentControlPanel() {
	const [selectedTab, setSelectedTab] = useState(contentTabItems[0].name);
	const handleTab = (tabName) => {
		setSelectedTab(tabName);
	};
	return (
		<PanelBody title={__("Content", "smart-list-block")} initialOpen={false}>
			<Tabs
				tabItems={contentTabItems}
				onHandleTab={handleTab}
				selectedTab={selectedTab}
			></Tabs>
			{selectedTab === "general" && <General></General>}
			{selectedTab === "styles" && <Style></Style>}
		</PanelBody>
	);
}

export default ContentControlPanel;
