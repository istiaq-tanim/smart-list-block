import ListOrientation from "../../../ListOrientation";
import Alignment from "./Presets/Alignment";
import ListPresets from "./Presets/ListPresets";

function Presets() {
	return (
		<>
			<ListPresets></ListPresets>
			<ListOrientation></ListOrientation>
			<Alignment></Alignment>
		</>
	);
}

export default Presets;
