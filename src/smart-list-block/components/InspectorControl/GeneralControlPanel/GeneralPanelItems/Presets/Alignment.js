import { useState } from "@wordpress/element";
import { alignmentTabItems } from "../../../../../const";
import Tabs from "../../../../Tabs/Tabs";

function Alignment() {
	const [selectedTab, setSelectedTab] = useState(alignmentTabItems[0].name);
	const handleTab = (tabName) => {
		setSelectedTab(tabName);
	};
	return (
		<div>
			<p style={{ paddingTop: "8px" }}>Alignment</p>
			<Tabs
				tabItems={alignmentTabItems}
				onHandleTab={handleTab}
				selectedTab={selectedTab}
				variant="alignment"
			></Tabs>
		</div>
	);
}

export default Alignment;
