import Link from "../../../../assets/Link";
import ResetIcon from "../../../../assets/ResetIcon";
import TelevisionIcon from "../../../../assets/TelevisionIcon";
import Unlink from "../../../../assets/Unlink";
import NumberControl from "./NumberControl";

function SpacingControl({
	label,
	values = { top: 0, right: 0, bottom: 0, left: 0, linked: true },
	onChange = () => {},
}) {
	const handleValueChange = (position, value) => {
		if (values.linked) {
			onChange({
				...values,
				top: value,
				right: value,
				bottom: value,
				left: value,
			});
		} else {
			onChange({ ...values, [position]: value });
		}
	};

	const handleReset = () => {
		onChange({ top: 0, right: 0, bottom: 0, left: 0, linked: true });
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
			<div className="control-input-group">
				<NumberControl
					value={values.top}
					step={4}
					min={0}
					onChange={(val) => {
						handleValueChange("top", val);
					}}
				></NumberControl>
				<NumberControl
					value={values.right}
					step={4}
					onChange={(val) => {
						handleValueChange("right", val);
					}}
					min={0}
				></NumberControl>
				<NumberControl
					value={values.left}
					min={0}
					step={4}
					onChange={(val) => {
						handleValueChange("left", val);
					}}
				></NumberControl>
				<NumberControl
					value={values.bottom}
					min={0}
					step={4}
					onChange={(val) => {
						handleValueChange("bottom", val);
					}}
				></NumberControl>
				<div>
					<button
						onClick={() => onChange({ ...values, linked: !values.linked })}
						className={`link-btn ${values.linked ? "" : "is-unlinked "}`}
					>
						{values.linked ? <Link /> : <Unlink />}
					</button>
				</div>
			</div>
		</div>
	);
}

export default SpacingControl;
