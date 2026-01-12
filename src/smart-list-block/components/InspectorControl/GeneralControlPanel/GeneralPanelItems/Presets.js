import useBlockContext from "../../../../hooks/useBlockContext";
import ListOrientation from "../../../ListOrientation";
import CustomRangeControl from "../../common/RangeControl/CustomRangeControl";
import ToggleControlButton from "../../common/ToggleButton/ToggleButton";
import Alignment from "./Presets/Alignment";
import DividerSetting from "./Presets/DividerSettings/DividerSettings";
import ListPresets from "./Presets/ListPresets";

function Presets() {
	const { attributes, setAttributes } = useBlockContext();
	const { listOrientation, divider, showConnectionLine } = attributes;
	return (
		<>
			<ListPresets></ListPresets>
			<ListOrientation></ListOrientation>
			<Alignment></Alignment>
			<CustomRangeControl
				label="Space Between Lists"
				attributeKey="spaceBetween"
				min={0}
				max={100}
				defaultValue={20}
			></CustomRangeControl>
			<CustomRangeControl
				label="Icon to Content Gap"
				attributeKey="iconGap"
				min={0}
				max={100}
				defaultValue={10}
			></CustomRangeControl>
			<ToggleControlButton
				label="Divider"
				checked={divider.show}
				onChange={(value) =>
					setAttributes({ divider: { ...divider, show: value } })
				}
			></ToggleControlButton>
			{divider.show && <DividerSetting></DividerSetting>}
			{listOrientation === "vertical" && (
				<ToggleControlButton
					label="Connection Line"
					checked={showConnectionLine}
					onChange={(value) => setAttributes({ showConnectionLine: value })}
				></ToggleControlButton>
			)}
		</>
	);
}

export default Presets;
