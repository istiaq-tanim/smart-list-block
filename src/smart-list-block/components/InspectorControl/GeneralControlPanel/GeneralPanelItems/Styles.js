import useBlockContext from "../../../../hooks/useBlockContext";
import { useDeviceType } from "../../../../utils";
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

	const deviceType = useDeviceType();
	const normalizedDeviceType = deviceType?.toLowerCase() || "desktop";

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
			{border.show && <BorderSetting attributeKey="border"></BorderSetting>}
			<SpacingControl
				values={attributes.radius}
				deviceType={normalizedDeviceType}
				label="Border Radius"
				onChange={(values) => setAttributes({ radius: values })}
			></SpacingControl>
			<SpacingControl
				values={attributes.padding}
				deviceType={normalizedDeviceType}
				label="Padding"
				onChange={(values) => setAttributes({ padding: values })}
			></SpacingControl>
			<SpacingControl
				values={attributes.margin}
				deviceType={normalizedDeviceType}
				label="Margin"
				onChange={(values) => setAttributes({ margin: values })}
			></SpacingControl>
		</div>
	);
}
export default Styles;
