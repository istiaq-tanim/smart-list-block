import { useState } from "react";
import { orientationTabItems } from "../const";
import Tabs from "./Tabs/Tabs";

function ListOrientation() {
	const [selectedTab, setSelectedTab] = useState(orientationTabItems[0].name);
	const handleTab = (tabName) => {
		setSelectedTab(tabName);
	};
	return (
		<div>
			<p>List Orientation</p>
			<Tabs
				tabItems={orientationTabItems}
				onHandleTab={handleTab}
				selectedTab={selectedTab}
				variant="only-text"
			></Tabs>
		</div>
	);
}

export default ListOrientation;
