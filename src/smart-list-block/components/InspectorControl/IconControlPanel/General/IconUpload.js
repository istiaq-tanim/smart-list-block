import { useState } from "react";
import PlusIcon from "../../../../assets/PlusIcon";
import Label from "../../common/Label";
import { Popover } from "@wordpress/components";
import { getIcons } from "../../../../const/icons";

function IconUpload() {
	const [isOpen, setIsOpen] = useState(false);
	const iconList = getIcons();

	return (
		<div style={{ cursor: "pointer" }}>
			<Label label="Icon Sources"></Label>
			<div className="icon-upload">
				<div onClick={() => setIsOpen(!isOpen)}>
					<PlusIcon></PlusIcon>
					{isOpen && (
						<Popover placement="top-start" onClose={() => setIsOpen(false)}>
							<div
								style={{
									display: "grid",
									gridTemplateColumns: "repeat(6, 1fr)",
									gap: "4px",
									width: "420px",
									justifyItems: "center",
									padding: "8px",
									overflow: "hidden",
								}}
							>
								{iconList.map((icon) => {
									const IconComponent = icon.component;
									return (
										<div className="icon-option-svg">
											<IconComponent size={24} />
										</div>
									);
								})}
							</div>
						</Popover>
					)}
				</div>
			</div>
		</div>
	);
}

export default IconUpload;
