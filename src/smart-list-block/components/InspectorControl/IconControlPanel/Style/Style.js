import { iconBackgroundTabsItems, iconEffectTabItems } from "../../../../const";
import useBlockContext from "../../../../hooks/useBlockContext";
import { useDeviceType } from "../../../../utils";
import CustomColorPicker from "../../common/CustomColorPicker/CustomColorPicker";
import Label from "../../common/Label";
import SpacingControl from "../../common/SpacingControl/SpacingControl";
import Tabs from "../../common/Tabs/Tabs";
import ToggleControlButton from "../../common/ToggleButton/ToggleButton";
import BorderSetting from "../../GeneralControlPanel/GeneralPanelItems/Styles/BorderSettings/BorderSettings";

function Style() {
	const { attributes, setAttributes } = useBlockContext();
	const { iconStyle, iconBorderStyle, iconEffect } = attributes;
	const selectedTab = iconStyle.type;
	const selectedEffectTab = iconEffect;

	console.log(selectedEffectTab, iconStyle);

	const handleTab = (tabName) => {
		setAttributes({ iconStyle: { ...iconStyle, type: tabName } });
	};

	const handleEffectTab = (tabName) => {
		setAttributes({ iconEffect: tabName });
	};

	const handleIconBackgroundColor = (value) => {
		if (iconEffect === "normal") {
			setAttributes({ iconStyle: { ...iconStyle, iconBgColor: value } });
		} else if (iconEffect === "hover") {
			setAttributes({ iconStyle: { ...iconStyle, iconHoverBgColor: value } });
		}
	};
	const handleIconColor = (value) => {
		if (iconEffect === "normal") {
			setAttributes({ iconStyle: { ...iconStyle, iconColor: value } });
		} else if (iconEffect === "hover") {
			setAttributes({ iconStyle: { ...iconStyle, iconHoverColor: value } });
		}
	};

	const deviceType = useDeviceType();
	const normalizedDeviceType = deviceType?.toLowerCase() || "desktop";
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
							iconEffect === "normal"
								? iconStyle.iconBgColor
								: iconStyle.iconHoverBgColor
						}
						onChange={handleIconBackgroundColor}
						defaultValue="#EEEEEE"
					></CustomColorPicker>
				</>
			)}
			<CustomColorPicker
				label="Icon Color"
				value={
					iconEffect === "normal"
						? iconStyle.iconColor
						: iconStyle.iconHoverColor
				}
				onChange={handleIconColor}
				defaultValue="#757575"
			></CustomColorPicker>
			<ToggleControlButton
				label="Border"
				checked={iconBorderStyle.show}
				onChange={(value) =>
					setAttributes({
						iconBorderStyle: { ...iconBorderStyle, show: value },
					})
				}
			></ToggleControlButton>
			{iconBorderStyle.show && (
				<BorderSetting attributeKey="iconBorderStyle"></BorderSetting>
			)}
			<SpacingControl
				values={attributes.radiusIcon}
				deviceType={normalizedDeviceType}
				label="Border Radius"
				onChange={(values) => setAttributes({ radiusIcon: values })}
			></SpacingControl>
			<SpacingControl
				values={attributes.paddingIcon}
				deviceType={normalizedDeviceType}
				label="Padding"
				onChange={(values) => setAttributes({ paddingIcon: values })}
			></SpacingControl>
		</div>
	);
}

export default Style;
