import { useState, useRef } from "@wordpress/element";
import Circle from "../../../../assets/Circle";
import ResetIcon from "../../../../assets/ResetIcon";
import { ColorPicker, Popover } from "@wordpress/components";
import useBlockContext from "../../../../hooks/useBlockContext";

function CustomColorPicker({ label }) {
	const [isOpen, setIsOpen] = useState(false);
	const { attributes, setAttributes } = useBlockContext();
	const anchorRef = useRef(null);
	const { divider } = attributes;

	const handleColorChange = (value) => {
		setAttributes({
			divider: { ...divider, color: value.hex },
		});
	};

	const handleReset = () => {
		setAttributes({
			divider: { ...divider, color: "#DDDDDD" },
		});
		setIsOpen(false);
	};

	return (
		<div className="custom-range-control">
			<div className="range-control">
				<div className="content">
					<div className="range-label">
						<p>{label}</p>
					</div>
					<div className="range-measure">
						<div>
							<ResetIcon
								style={{ cursor: "pointer" }}
								onClick={handleReset}
							></ResetIcon>
							<div className="color">
								<div
									onClick={() => {
										setIsOpen(!isOpen);
									}}
									ref={anchorRef}
									style={{ cursor: "pointer" }}
								>
									<Circle fill={divider.color} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{isOpen && anchorRef.current && (
				<Popover
					position="middle right"
					onClose={() => setIsOpen(false)}
					className="color-popover"
					usePortal={false}
				>
					<ColorPicker
						color={divider.color}
						onChangeComplete={handleColorChange}
						enableAlpha
					/>
				</Popover>
			)}
		</div>
	);
}

export default CustomColorPicker;
