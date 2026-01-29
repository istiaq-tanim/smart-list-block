import { RangeControl } from "@wordpress/components";
import ResetIcon from "../../../../assets/ResetIcon";
import useBlockContext from "../../../../hooks/useBlockContext";
import { useDeviceType } from "../../../../utils";
import DeviceDropdown from "../../../ResponsibeDropdown";

function CustomRangeControl({
	label = "Space Between Lists",
	attributeKey = "spaceBetween",
	min = 0,
	max = 100,
	defaultValue = 0,
	nestedKey = null,
}) {
	const { attributes, setAttributes } = useBlockContext();
	const deviceType = useDeviceType();

	const normalizedDeviceType = deviceType?.toLowerCase() || "desktop";
	const activeSubKey = normalizedDeviceType;

	const value =
		nestedKey && activeSubKey
			? attributes?.[attributeKey]?.[nestedKey]?.[activeSubKey] ?? defaultValue
			: activeSubKey
			? attributes?.[attributeKey]?.[activeSubKey] ?? defaultValue
			: attributes?.[attributeKey] ?? defaultValue;

	const handleChange = (attributeKey, newValue, deviceSubKey) => {
		if (nestedKey && deviceSubKey) {
			setAttributes({
				[attributeKey]: {
					...attributes[attributeKey],
					[nestedKey]: {
						...attributes[attributeKey]?.[nestedKey],
						[deviceSubKey]: newValue,
					},
				},
			});
		} else if (deviceSubKey) {
			setAttributes({
				[attributeKey]: {
					...attributes[attributeKey],
					[deviceSubKey]: newValue,
				},
			});
		} else {
			setAttributes({ [attributeKey]: newValue });
		}
	};

	const handleReset = () => {
		handleChange(attributeKey, defaultValue, activeSubKey);
	};
	return (
		<div className="custom-range-control">
			<div className="range-control">
				<div className="content">
					<div className="range-label">
						<p>{label}</p>
						<div className="desktop">
							<DeviceDropdown></DeviceDropdown>
						</div>
					</div>
					<div className="range-measure">
						<div>
							<ResetIcon style={{ cursor: "pointer" }} onClick={handleReset} />
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
					onChange={(newValue) =>
						handleChange(attributeKey, newValue, activeSubKey)
					}
				/>
			</div>
		</div>
	);
}

export default CustomRangeControl;
