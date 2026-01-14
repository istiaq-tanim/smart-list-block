import { dividerStyle } from "../../../../../../const";
import useBlockContext from "../../../../../../hooks/useBlockContext";
import CustomColorPicker from "../../../../common/CustomColorPicker/CustomColorPicker";
import CustomRangeControl from "../../../../common/RangeControl/CustomRangeControl";
import SectionControlButton from "../../../../common/Selection/Selection";

function DividerSetting() {
	const { attributes, setAttributes } = useBlockContext();
	const { divider } = attributes;

	const handleDividerColor = (value) => {
		setAttributes({ divider: { ...divider, color: value } });
	};
	return (
		<div>
			<SectionControlButton
				label="Divider Style"
				options={dividerStyle}
			></SectionControlButton>
			<CustomRangeControl
				label="Divider Width"
				attributeKey="divider"
				min={0}
				max={10}
				defaultValue={1}
				subKey="width"
			></CustomRangeControl>
			<CustomColorPicker
				label="Divider Color"
				value={divider.color}
				onChange={handleDividerColor}
			></CustomColorPicker>
		</div>
	);
}

export default DividerSetting;
