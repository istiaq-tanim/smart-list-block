import { orientationTabItems } from "../const";
import Tabs from "./InspectorControl/common/Tabs/Tabs";
import useBlockContext from "../hooks/useBlockContext";
import Label from "../components/InspectorControl/common/Label";

function ListOrientation() {
	const { attributes, setAttributes } = useBlockContext();
	const { listOrientation } = attributes;

	const selectedTab = listOrientation;

	const handleTab = (tabName) => {
		setAttributes({ listOrientation: tabName });
	};
	return (
		<div>
			<Label label="List Orientation"></Label>
			<br />
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
