import { __ } from "@wordpress/i18n";
import { SelectControl } from "@wordpress/components";
import useBlockContext from "../../../../hooks/useBlockContext";
function SectionControlButton({
	label,
	options,
	inline = true,
	attributeKey,
	subKey,
}) {
	const { attributes, setAttributes } = useBlockContext();

	const handleChange = (newValue) => {
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
		<div
			className={`selector-control custom-selector ${inline ? "inline" : ""}`}
		>
			<p className="selector-label">{label}</p>
			<SelectControl
				options={options}
				onChange={(value) => handleChange(value)}
				value={attributes[attributeKey][subKey]}
			></SelectControl>
		</div>
	);
}

export default SectionControlButton;
