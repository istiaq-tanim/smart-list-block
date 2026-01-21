import { useState } from "react";
import PlusIcon from "../../../../assets/PlusIcon";
import Label from "../../common/Label";
import { Popover } from "@wordpress/components";
import { getIcons } from "../../../../const/icons";
import useBlockContext from "../../../../hooks/useBlockContext";

function IconUpload() {
	const { attributes, setAttributes } = useBlockContext();
	const { icon } = attributes;
	const iconSourceId = icon?.iconSourceId;

	const [isOpen, setIsOpen] = useState(false);
	const iconList = getIcons();

	const handleIconSelect = (selectedIcon) => {
		setAttributes({
			icon: {
				...icon,
				iconSourceId: selectedIcon.id,
			},
		});
		setIsOpen(false);
	};

	const getIconComponent = () => {
		if (!iconSourceId) return null;
		const iconItem = iconList.find((item) => item.id === iconSourceId);
		return iconItem?.component;
	};

	const SelectedIconComponent = getIconComponent();

	return (
		<div style={{ cursor: "pointer" }}>
			<Label label="Icon Sources"></Label>
			<div className="icon-upload">
				<div onClick={() => setIsOpen(!isOpen)}>
					{SelectedIconComponent ? (
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								padding: "8px",
								border: "1px solid #ddd",
								borderRadius: "4px",
							}}
						>
							<SelectedIconComponent size={24} />
						</div>
					) : (
						<PlusIcon />
					)}
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
								{iconList.map((iconItem, index) => {
									const IconComponent = iconItem.component;
									const isSelected = iconSourceId === iconItem.id;
									return (
										<div
											key={index}
											className="icon-option-svg"
											onClick={(e) => {
												e.stopPropagation();
												handleIconSelect(iconItem);
											}}
											style={{
												padding: "8px",
												borderRadius: "4px",
												backgroundColor: isSelected
													? "#F05D31;"
													: "transparent",
												cursor: "pointer",
												transition: "all 0.2s ease",
											}}
										>
											<IconComponent
												size={24}
												color={isSelected ? "#fff" : "#757575"}
											/>
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
