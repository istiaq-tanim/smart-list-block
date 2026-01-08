import { useState } from "@wordpress/element";
import { presetTabItems } from "../../../../../const";
import Tabs from "../../../../Tabs/Tabs";

function ListPresets() {
	const [selectedTab, setSelectedTab] = useState(presetTabItems[0].name);
	const handleTab = (tabName) => {
		setSelectedTab(tabName);
	};
	return (
		<div>
			<p>List Presets</p>
			{
				<Tabs
					tabItems={presetTabItems}
					onHandleTab={handleTab}
					selectedTab={selectedTab}
					variant="icon"
				></Tabs>
			}
		</div>
	);
}

export default ListPresets;
