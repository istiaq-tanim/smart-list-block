import { PanelBody } from "@wordpress/components";
import Tabs from "../../Tabs/Tabs";
import Presets from "./GeneralPanelItems/Presets";
import Styles from "./GeneralPanelItems/Styles";
import { useState } from "@wordpress/element";
import { generalTabItems } from "../../../const";
import { __ } from "@wordpress/i18n";

function GeneralControlPanel() {
	const [selectedTab, setSelectedTab] = useState(generalTabItems[0].name);
	const handleTab = (tabName) => {
		setSelectedTab(tabName);
	};
	return (
		<PanelBody title={__("General", "smart-list-block")}>
			<Tabs
				tabItems={generalTabItems}
				onHandleTab={handleTab}
				selectedTab={selectedTab}
			></Tabs>
			{selectedTab === "presets" && <Presets></Presets>}
			{selectedTab === "styles" && <Styles></Styles>}
		</PanelBody>
	);
}

export default GeneralControlPanel;
