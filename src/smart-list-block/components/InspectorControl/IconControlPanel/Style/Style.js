import { iconBackgroundTabsItems } from "../../../../const";
import useBlockContext from "../../../../hooks/useBlockContext";
import Label from "../../common/Label";
import Tabs from "../../common/Tabs/Tabs";
import ToggleControlButton from "../../common/ToggleButton/ToggleButton";

function Style() {
	const { attributes, setAttributes } = useBlockContext();
	const { iconStyle } = attributes;
	const selectedTab = iconStyle.type;
	const handleTab = (tabName) => {
		setAttributes({ iconStyle: { ...iconStyle, type: tabName } });
	};
	return (
		<div>
			<ToggleControlButton
				label="Icon Background"
				checked={iconStyle.show}
				onChange={(value) =>
					setAttributes({ iconStyle: { ...iconStyle, show: value } })
				}
			></ToggleControlButton>
			{iconStyle.show && (
				<>
					<Label label="Choose Background Shape"></Label>
					<br />
					<Tabs
						tabItems={iconBackgroundTabsItems}
						onHandleTab={handleTab}
						selectedTab={selectedTab}
						variant="alignment"
						color="#757575"
					></Tabs>
					<CustomColorPicker
						label="Icon Color"
						value={title.color}
						onChange={handleTextColor}
					></CustomColorPicker>
				</>
			)}
		</div>
	);
}

export default Style;
