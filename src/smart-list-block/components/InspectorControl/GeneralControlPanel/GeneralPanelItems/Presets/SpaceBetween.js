import { RangeControl } from "@wordpress/components";
import ResetIcon from "../../../../../assets/ResetIcon";
import TelevisionIcon from "../../../../../assets/TelevisionIcon";
import useBlockContext from "../../../../../hooks/useBlockContext";

function CustomRangeControl({
	label = "Space Between Lists",
	attributeKey = "spaceBetween",
	min = 0,
	max = 100,
	defaultValue = 10,
}) {
	const { attributes, setAttributes } = useBlockContext();
	const value = attributes[attributeKey] || defaultValue;

	const handleChange = (attributeKey, newValue) => {
		setAttributes({ [attributeKey]: newValue });
	};
	return (
		<div className="custom-range-control">
			<div className="range-control">
				<div className="content">
					<p>{label}</p>
					<div className="desktop">
						<TelevisionIcon></TelevisionIcon>
					</div>
					<div className="range-measure">
						<div>
							<ResetIcon></ResetIcon>
							<div className="pixel">
								<p>px</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="input-range">
				<RangeControl
					max={max}
					min={min}
					value={value}
					onChange={(newValue) => handleChange(attributeKey, newValue)}
				></RangeControl>
			</div>
		</div>
	);
}

export default CustomRangeControl;
