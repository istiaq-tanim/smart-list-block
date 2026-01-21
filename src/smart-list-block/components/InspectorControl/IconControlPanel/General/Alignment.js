import { iconAlignmentTabItems } from "../../../../const";
import useBlockContext from "../../../../hooks/useBlockContext";
import Label from "../../common/Label";
import Tabs from "../../common/Tabs/Tabs";

function Alignment() {
	const { attributes, setAttributes } = useBlockContext();
	const { icon } = attributes;
	const selectedTab = icon?.alignment;
	const handleTab = (tabName) => {
		setAttributes({ icon: { ...icon, alignment: tabName } });
	};

	console.log(icon);
	return (
		<div>
			<Label label="Alignment"></Label>
			<br />
			{
				<Tabs
					tabItems={iconAlignmentTabItems}
					onHandleTab={handleTab}
					selectedTab={selectedTab}
					variant="alignment"
				></Tabs>
			}
		</div>
	);
}

export default Alignment;
