import ListOrientation from "../../../ListOrientation";
import Alignment from "./Presets/Alignment";
import ListPresets from "./Presets/ListPresets";
import CustomRangeControl from "./Presets/SpaceBetween";

function Presets() {
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
				max={50}
				defaultValue={10}
			></CustomRangeControl>
		</>
	);
}

export default Presets;
