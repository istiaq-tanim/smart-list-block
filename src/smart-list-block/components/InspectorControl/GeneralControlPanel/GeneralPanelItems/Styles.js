import useBlockContext from "../../../../hooks/useBlockContext";
import CustomColorPicker from "../../common/CustomColorPicker/CustomColorPicker";
import BackgroundStyle from "./GeneralStyle/BackgroundStyle";

function Styles() {
	const { attributes, setAttributes } = useBlockContext();
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
		</div>
	);
}
export default Styles;
