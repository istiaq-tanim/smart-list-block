import { __ } from "@wordpress/i18n";
import { ToggleControl } from "@wordpress/components";
function ToggleControlButton({ label, checked, onChange }) {
	return (
		<div className="toggle-control custom-toggle">
			<p className="toggle-label">{label}</p>
			<ToggleControl checked={checked} onChange={onChange}></ToggleControl>
		</div>
	);
}

export default ToggleControlButton;
