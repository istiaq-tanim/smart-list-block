import useBlockContext from "../../../../hooks/useBlockContext";
import CustomColorPicker from "../../common/CustomColorPicker/CustomColorPicker";
import SpacingControl from "../../common/SpacingControl/SpacingControl";
import ToggleControlButton from "../../common/ToggleButton/ToggleButton";
import BackgroundStyle from "./GeneralStyle/BackgroundStyle";
import BorderSetting from "./Styles/BorderSettings/BorderSettings";

function Styles() {
	const { attributes, setAttributes } = useBlockContext();
	const { border } = attributes;
	const handleChange = (newColor) => {
		setAttributes({ color: newColor });
	};

	return (
		<div>
			<BackgroundStyle label="Background Style"></BackgroundStyle>
			<CustomColorPicker
				label="Color"
				onChange={handleChange}
				value={attributes.color}
			></CustomColorPicker>
			<ToggleControlButton
				label="Border"
				checked={border.show}
				onChange={(value) =>
					setAttributes({ border: { ...border, show: value } })
				}
			></ToggleControlButton>
			{border.show && <BorderSetting></BorderSetting>}
			<SpacingControl
				values={attributes.radius}
				label="Border Radius"
				onChange={(values) => setAttributes({ radius: values })}
			></SpacingControl>
			<SpacingControl
				values={attributes.padding}
				label="Padding"
				onChange={(values) => setAttributes({ padding: values })}
			></SpacingControl>
			<SpacingControl
				values={attributes.margin}
				label="Margin"
				onChange={(values) => setAttributes({ margin: values })}
			></SpacingControl>
		</div>
	);
}
export default Styles;
