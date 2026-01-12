import { RangeControl } from "@wordpress/components";
import TelevisionIcon from "../../../../assets/TelevisionIcon";
import ResetIcon from "../../../../assets/ResetIcon";
import useBlockContext from "../../../../hooks/useBlockContext";

function CustomRangeControl({
	label = "Space Between Lists",
	attributeKey = "spaceBetween",
	min = 0,
	max = 100,
	defaultValue = 0,
	subKey = null,
}) {
	const { attributes, setAttributes } = useBlockContext();
	const value = attributes[attributeKey] || defaultValue;

	console.log(attributes);

	//Handle Both primitive and nonPrimitive attributes

	const handleChange = (attributeKey, newValue, subKey) => {
		if (subKey) {
			setAttributes({
				[attributeKey]: {
					...attributes[attributeKey],
					[subKey]: newValue,
				},
			});
		} else {
			setAttributes({ [attributeKey]: newValue });
		}
	};
	return (
		<div className="custom-range-control">
			<div className="range-control">
				<div className="content">
					<div className="range-label">
						<p>{label}</p>
						<div className="desktop">
							<TelevisionIcon></TelevisionIcon>
						</div>
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
					onChange={(newValue) => handleChange(attributeKey, newValue, subKey)}
				></RangeControl>
			</div>
		</div>
	);
}

export default CustomRangeControl;
