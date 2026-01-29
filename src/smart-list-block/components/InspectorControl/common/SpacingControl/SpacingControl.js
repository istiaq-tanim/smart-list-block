import Link from "../../../../assets/Link";
import ResetIcon from "../../../../assets/ResetIcon";
import Unlink from "../../../../assets/Unlink";
import DeviceDropdown from "../../../ResponsibeDropdown";
import NumberControl from "./NumberControl";

function SpacingControl({
	label,
	values = {
		desktop: { top: 0, right: 0, bottom: 0, left: 0, linked: true },
		tablet: { top: 0, right: 0, bottom: 0, left: 0, linked: true },
		mobile: { top: 0, right: 0, bottom: 0, left: 0, linked: true },
	},
	onChange = () => {},
	deviceType = "desktop",
}) {
	const currentValues = values[deviceType] || {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		linked: true,
	};

	const handleValueChange = (position, value) => {
		const updateDeviceValue = currentValues.linked
			? {
					...currentValues,
					top: value,
					right: value,
					bottom: value,
					left: value,
			  }
			: { ...currentValues, [position]: value };

		onChange({
			...values,
			[deviceType]: updateDeviceValue,
		});
	};

	const handleReset = () => {
		onChange({
			...values,
			[deviceType]: { top: 0, right: 0, bottom: 0, left: 0, linked: true },
		});
	};

	const handleLinkToggle = () => {
		onChange({
			...values,
			[deviceType]: { ...currentValues, linked: !currentValues.linked },
		});
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
			<div className="control-input-group">
				<NumberControl
					value={currentValues.top}
					step={4}
					min={0}
					onChange={(val) => {
						handleValueChange("top", val);
					}}
				></NumberControl>
				<NumberControl
					value={currentValues.right}
					step={4}
					onChange={(val) => {
						handleValueChange("right", val);
					}}
					min={0}
				></NumberControl>
				<NumberControl
					value={currentValues.left}
					min={0}
					step={4}
					onChange={(val) => {
						handleValueChange("left", val);
					}}
				></NumberControl>
				<NumberControl
					value={currentValues.bottom}
					min={0}
					step={4}
					onChange={(val) => {
						handleValueChange("bottom", val);
					}}
				></NumberControl>
				<div>
					<button
						onClick={handleLinkToggle}
						className={`link-btn ${currentValues.linked ? "" : "is-unlinked "}`}
					>
						{currentValues.linked ? <Link /> : <Unlink />}
					</button>
				</div>
			</div>
		</div>
	);
}

export default SpacingControl;
