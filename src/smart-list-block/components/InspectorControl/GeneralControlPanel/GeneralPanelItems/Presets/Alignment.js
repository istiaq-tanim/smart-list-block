import { alignmentTabItems } from "../../../../../const";
import useBlockContext from "../../../../../hooks/useBlockContext";
import Tabs from "../../../../Tabs/Tabs";

function Alignment() {
	const { attributes, setAttributes } = useBlockContext();
	const { alignment } = attributes;
	const selectedTab = alignment;
	const handleTab = (tabName) => {
		setAttributes({ alignment: tabName });
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
