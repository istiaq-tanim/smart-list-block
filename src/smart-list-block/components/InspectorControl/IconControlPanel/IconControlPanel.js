import { PanelBody } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { iconImageTabItems } from "../../../const";
import Tabs from "../common/Tabs/Tabs";
import General from "../IconControlPanel/General/General";
import Style from "../IconControlPanel/Style/Style";

function ContentControlPanel() {
	const [selectedTab, setSelectedTab] = useState(iconImageTabItems[0].name);
	const handleTab = (tabName) => {
		setSelectedTab(tabName);
	};
	return (
		<PanelBody title={__("Icon/Image", "smart-list-block")} initialOpen={false}>
			<Tabs
				tabItems={iconImageTabItems}
				onHandleTab={handleTab}
				selectedTab={selectedTab}
			></Tabs>
			{selectedTab === "general" && <General></General>}
			{selectedTab === "styles" && <Style></Style>}
		</PanelBody>
	);
}

export default ContentControlPanel;
