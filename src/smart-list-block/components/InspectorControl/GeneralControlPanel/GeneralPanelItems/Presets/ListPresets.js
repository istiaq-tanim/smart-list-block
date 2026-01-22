import { presetTabItems } from "../../../../../const";
import Tabs from "../../../common/Tabs/Tabs";
import useBlockContext from "../../../../../hooks/useBlockContext";

function ListPresets() {
	const { attributes, setAttributes } = useBlockContext();
	const { presetsType } = attributes;
	const selectedTab = presetsType;
	const handleTab = (tabName) => {
		setAttributes({ presetsType: tabName });
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
					activeColor="#1A74E4"
				></Tabs>
			}
		</div>
	);
}

export default ListPresets;
