import CustomColorPicker from "../../../common/CustomColorPicker/CustomColorPicker";
import CustomRangeControl from "../../../common/RangeControl/CustomRangeControl";
import ToggleControlButton from "../../../common/ToggleButton/ToggleButton";

function BackgroundOverlay({ value, onChange }) {
	const { enabled, color, opacity } = value || {
		enabled: false,
		color: "#f05e31",
		opacity: {
			desktop: 50,
			mobile: 30,
			tablet: 30,
		},
	};

	const handleToggle = (newEnabled) => {
		onChange({ ...value, enabled: newEnabled });
	};

	const handleColorChange = (newColor) => {
		onChange({ ...value, color: newColor });
	};

	return (
		<div>
			<ToggleControlButton
				label="Overlay"
				checked={enabled}
				onChange={handleToggle}
			></ToggleControlButton>
			{enabled && (
				<>
					<div>
						<CustomColorPicker
							label="Overlay Color"
							value={color}
							onChange={handleColorChange}
						></CustomColorPicker>
						<CustomRangeControl
							label="opacity"
							attributeKey="backgroundOverlay"
							max={100}
							defaultValue={50}
							nestedKey="opacity"
						></CustomRangeControl>
					</div>
				</>
			)}
		</div>
	);
}

export default BackgroundOverlay;
