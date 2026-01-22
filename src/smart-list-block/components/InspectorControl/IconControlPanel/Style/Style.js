import { iconBackgroundTabsItems, iconEffectTabItems } from "../../../../const";
import useBlockContext from "../../../../hooks/useBlockContext";
import CustomColorPicker from "../../common/CustomColorPicker/CustomColorPicker";
import Label from "../../common/Label";
import Tabs from "../../common/Tabs/Tabs";
import ToggleControlButton from "../../common/ToggleButton/ToggleButton";

function Style() {
	const { attributes, setAttributes } = useBlockContext();
	const { iconStyle } = attributes;
	const selectedTab = iconStyle.type;
	const selectedEffectTab = iconStyle.effect;

	const handleTab = (tabName) => {
		setAttributes({ iconStyle: { ...iconStyle, type: tabName } });
	};

	const handleEffectTab = (tabName) => {
		setAttributes({ iconStyle: { ...iconStyle, effect: tabName } });
	};

	const handleIconBackgroundColor = (value) => {
		if (iconStyle.effect === "normal") {
			setAttributes({ iconStyle: { ...iconStyle, iconBgColor: value } });
		} else if (iconStyle.effect === "hover") {
			setAttributes({ iconStyle: { ...iconStyle, iconHoverBgColor: value } });
		}
	};
	const handleIconColor = (value) => {
		if (iconStyle.effect === "normal") {
			setAttributes({ iconStyle: { ...iconStyle, iconColor: value } });
		} else if (iconStyle.effect === "hover") {
			setAttributes({ iconStyle: { ...iconStyle, iconHoverColor: value } });
		}
	};
	return (
		<div>
			<ToggleControlButton
				label="Icon Background"
				checked={iconStyle.show}
				onChange={(value) =>
					setAttributes({ iconStyle: { ...iconStyle, show: value } })
				}
			></ToggleControlButton>

			<br />
			<Tabs
				tabItems={iconEffectTabItems}
				onHandleTab={handleEffectTab}
				selectedTab={selectedEffectTab}
				variant="only-text"
			></Tabs>

			{iconStyle.show && (
				<>
					<br />
					<Label label="Choose Background Shape"></Label>
					<br />
					<Tabs
						tabItems={iconBackgroundTabsItems}
						onHandleTab={handleTab}
						selectedTab={selectedTab}
						variant="alignment"
						color="#757575"
					></Tabs>
					<CustomColorPicker
						label="Icon Background"
						value={
							iconStyle.effect === "normal"
								? iconStyle.iconBgColor
								: iconStyle.iconHoverBgColor
						}
						onChange={handleIconBackgroundColor}
					></CustomColorPicker>
				</>
			)}
			<CustomColorPicker
				label="Icon Color"
				value={
					iconStyle.effect === "normal"
						? iconStyle.iconColor
						: iconStyle.iconHoverColor
				}
				onChange={handleIconColor}
			></CustomColorPicker>
		</div>
	);
}

export default Style;
