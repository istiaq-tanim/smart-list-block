import { dividerStyle } from "../../../../../../const";
import useBlockContext from "../../../../../../hooks/useBlockContext";
import CustomColorPicker from "../../../../common/CustomColorPicker/CustomColorPicker";
import CustomRangeControl from "../../../../common/RangeControl/CustomRangeControl";
import SectionControlButton from "../../../../common/Selection/Selection";

function BorderSetting({ attributeKey }) {
	const { attributes, setAttributes } = useBlockContext();
	const value = attributes?.[attributeKey]?.color;

	const handleBorderColor = (value) => {
		setAttributes({
			[attributeKey]: { ...attributes[attributeKey], color: value },
		});
	};

	return (
		<div>
			<SectionControlButton
				label="Border Style"
				options={dividerStyle}
				attributeKey={attributeKey}
				subKey="style"
			></SectionControlButton>
			<CustomRangeControl
				label="Border Width"
				attributeKey={attributeKey}
				min={0}
				max={10}
				defaultValue={1}
				nestedKey="width"
			></CustomRangeControl>
			<CustomColorPicker
				label="Border Color"
				value={value}
				onChange={handleBorderColor}
			></CustomColorPicker>
		</div>
	);
}

export default BorderSetting;
