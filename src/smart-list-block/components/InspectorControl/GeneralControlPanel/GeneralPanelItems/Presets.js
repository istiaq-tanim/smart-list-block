import { useEffect, useRef } from "@wordpress/element";
import useBlockContext from "../../../../hooks/useBlockContext";
import ListOrientation from "../../../ListOrientation";
import CustomRangeControl from "../../common/RangeControl/CustomRangeControl";
import ToggleControlButton from "../../common/ToggleButton/ToggleButton";
import Alignment from "./Presets/Alignment";
import DividerSetting from "./Presets/DividerSettings/DividerSettings";
import ListPresets from "./Presets/ListPresets";

function Presets() {
	const { attributes, setAttributes } = useBlockContext();
	const { listOrientation, divider, showConnectionLine, presetsType } =
		attributes;

	const prevListRef = useRef(divider.show);
	// Handle user preset list when divider on and of
	useEffect(() => {
		if (presetsType !== "list") {
			// Save user's list preference before forcing
			prevListRef.current = divider.show;

			if (!divider.show) {
				setAttributes({
					divider: { ...divider, show: true },
				});
			}
		} else {
			// Restore user's list preference
			setAttributes({
				divider: { ...divider, show: prevListRef.current },
			});
		}
	}, [presetsType]);
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
				defaultValue={24}
			></CustomRangeControl>
			<CustomRangeControl
				label="Icon to Content Gap"
				attributeKey="iconGap"
				min={0}
				max={100}
				defaultValue={12}
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
