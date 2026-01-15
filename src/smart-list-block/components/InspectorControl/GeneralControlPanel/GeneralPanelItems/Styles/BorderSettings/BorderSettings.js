import { dividerStyle } from "../../../../../../const";
import useBlockContext from "../../../../../../hooks/useBlockContext";
import CustomColorPicker from "../../../../common/CustomColorPicker/CustomColorPicker";
import CustomRangeControl from "../../../../common/RangeControl/CustomRangeControl";
import SectionControlButton from "../../../../common/Selection/Selection";

function BorderSetting() {
	const { attributes, setAttributes } = useBlockContext();
	const { border } = attributes;

	const handleBorderColor = (value) => {
		setAttributes({ border: { ...border, color: value } });
	};
	return (
		<div>
			<SectionControlButton
				label="Border Style"
				options={dividerStyle}
				attributeKey="border"
				subKey="style"
			></SectionControlButton>
			<CustomRangeControl
				label="Border Width"
				attributeKey="border"
				min={0}
				max={10}
				defaultValue={1}
				subKey="width"
			></CustomRangeControl>
			<CustomColorPicker
				label="Border Color"
				value={border.color}
				onChange={handleBorderColor}
			></CustomColorPicker>
		</div>
	);
}

export default BorderSetting;
