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
	nestedKey = null,
}) {
	const { attributes, setAttributes } = useBlockContext();

	const value =
		nestedKey && subKey
			? attributes?.[attributeKey]?.[subKey]?.[nestedKey] ?? defaultValue
			: subKey
			? attributes?.[attributeKey]?.[subKey] ?? defaultValue
			: attributes?.[attributeKey] ?? defaultValue;

	//Handle Both primitive and nonPrimitive attributes

	const handleChange = (attributeKey, newValue, subKey) => {
		if (nestedKey && subKey) {
			setAttributes({
				[attributeKey]: {
					...attributes[attributeKey],
					[subKey]: {
						...attributes[attributeKey][subKey],
						[nestedKey]: newValue,
					},
				},
			});
		} else if (subKey) {
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

	//Reset the value with default value

	const handleReset = () => {
		handleChange(attributeKey, defaultValue, subKey);
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
							<ResetIcon
								style={{ cursor: "pointer" }}
								onClick={handleReset}
							></ResetIcon>
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
