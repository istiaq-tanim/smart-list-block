import { useState } from "react";
import { orientationTabItems } from "../const";
import Tabs from "./Tabs/Tabs";
import useBlockContext from "../hooks/useBlockContext";

function ListOrientation() {
	const { attributes, setAttributes } = useBlockContext();
	const { listOrientation } = attributes;

	const selectedTab = listOrientation;

	const handleTab = (tabName) => {
		setAttributes({ listOrientation: tabName });
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
