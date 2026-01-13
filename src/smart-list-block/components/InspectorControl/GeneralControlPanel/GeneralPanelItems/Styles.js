import CustomColorPicker from "../../common/CustomColorPicker/CustomColorPicker";
import BackgroundStyle from "./GeneralStyle/BackgroundStyle";

function Styles() {
	return (
		<div>
			<BackgroundStyle label="Background Style"></BackgroundStyle>
			<CustomColorPicker label="Color"></CustomColorPicker>
		</div>
	);
}
export default Styles;
