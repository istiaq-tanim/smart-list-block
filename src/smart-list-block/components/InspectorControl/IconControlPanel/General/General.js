import { iconPosition, iconTabItems } from "../../../../const";
import useBlockContext from "../../../../hooks/useBlockContext";
import Label from "../../common/Label";
import ToggleControlButton from "../../common/ToggleButton/ToggleButton";
import Tabs from "../../common/Tabs/Tabs";
import ImageUpload from "../../GeneralControlPanel/GeneralPanelItems/GeneralStyle/ImageUpload";
import CustomRangeControl from "../../common/RangeControl/CustomRangeControl";
import IconUpload from "./IconUpload";
import SectionControlButton from "../../common/Selection/Selection";

function General() {
	const { attributes, setAttributes } = useBlockContext();
	const { icon } = attributes;
	const selectedTab = icon.type;

	const handleTab = (tabName) => {
		setAttributes({ icon: { ...icon, type: tabName } });
	};

	const handleImageChange = (value) => {
		setAttributes({
			icon: { ...icon, imageSource: value },
		});
	};

	const renderBackgroundControl = () => {
		switch (selectedTab) {
			case "iconSet":
				return (
					<>
						<br />
						<IconUpload></IconUpload>
						<CustomRangeControl
							label="Icon Size"
							attributeKey="icon"
							subKey="size"
							min={0}
							max={100}
							defaultValue={24}
						></CustomRangeControl>
						<SectionControlButton
							label="Icon Position"
							options={iconPosition}
							attributeKey="icon"
							subKey="position"
						></SectionControlButton>
					</>
				);
			case "custom":
				return (
					<>
						<br />
						<ImageUpload
							onChange={handleImageChange}
							value={icon.imageSource || ""}
						></ImageUpload>
						<CustomRangeControl
							label="Width"
							attributeKey="icon"
							subKey="width"
							min={0}
							max={100}
							defaultValue={20}
						></CustomRangeControl>
						<CustomRangeControl
							label="Height"
							attributeKey="icon"
							subKey="height"
							min={0}
							max={100}
							defaultValue={20}
						></CustomRangeControl>
					</>
				);
			default:
				return null;
		}
	};
	return (
		<div>
			<ToggleControlButton
				label="Icon"
				checked={icon.show}
				onChange={(value) => setAttributes({ icon: { ...icon, show: value } })}
			></ToggleControlButton>
			{icon.show && (
				<>
					<Label label="Icon Source"></Label>
					<br />
					<Tabs
						tabItems={iconTabItems}
						onHandleTab={handleTab}
						selectedTab={selectedTab}
						variant="only-text"
					></Tabs>
					{renderBackgroundControl()}
				</>
			)}
		</div>
	);
}

export default General;
