import { __ } from "@wordpress/i18n";
import { SelectControl } from "@wordpress/components";
import useBlockContext from "../../../../hooks/useBlockContext";
function SectionControlButton({ label, options, inline = true }) {
	const { attributes, setAttributes } = useBlockContext();
	const { divider } = attributes;

	const handleChange = (value) => {
		setAttributes({ divider: { ...divider, style: value } });
	};
	return (
		<div
			className={`selector-control custom-selector ${inline ? "inline" : ""}`}
		>
			<p className="selector-label">{label}</p>
			<SelectControl
				options={options}
				onChange={(value) => handleChange(value)}
				value={divider.style}
			></SelectControl>
		</div>
	);
}

export default SectionControlButton;
