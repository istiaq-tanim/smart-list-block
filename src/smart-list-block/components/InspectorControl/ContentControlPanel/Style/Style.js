import useBlockContext from "../../../../hooks/useBlockContext";
import Typography from "../../common/Typography/Typography";
import Tabs from "../../common/Tabs/Tabs";
import { contentEffectItems } from "../../../../const";
import CustomColorPicker from "../../common/CustomColorPicker/CustomColorPicker";
function Style() {
	const { attributes, setAttributes } = useBlockContext();
	const { title, description, contentEffect } = attributes;
	const selectedTab = contentEffect;

	const handleTextColor = (value) => {
		if (contentEffect === "normal") {
			setAttributes({ title: { ...title, titleColor: value } });
		} else if (contentEffect === "hover") {
			setAttributes({ title: { ...title, titleHoverColor: value } });
		}
	};

	const handleDescriptionColor = (value) => {
		if (contentEffect === "normal") {
			setAttributes({
				description: { ...description, descriptionColor: value },
			});
		} else if (contentEffect === "hover") {
			setAttributes({
				description: { ...description, descriptionHoverColor: value },
			});
		}
	};

	const handleTab = (tabName) => {
		setAttributes({ contentEffect: tabName });
	};

	return (
		<>
			{/* Title Typography */}
			<Typography
				label="Title Typography"
				attributeKey="title"
				onChange={(value) => setAttributes({ title: value })}
				values={title}
			></Typography>
			{/* Description Typography */}
			{description.show && (
				<Typography
					label="Description Typography"
					attributeKey="description"
					onChange={(value) => setAttributes({ description: value })}
					values={description}
				></Typography>
			)}
			<Tabs
				tabItems={contentEffectItems}
				onHandleTab={handleTab}
				selectedTab={selectedTab}
				variant="only-text"
			></Tabs>
			<CustomColorPicker
				label="Title Color"
				value={
					contentEffect === "normal" ? title.titleColor : title.titleHoverColor
				}
				onChange={handleTextColor}
			></CustomColorPicker>
			{description.show && (
				<CustomColorPicker
					label="Description Color"
					value={
						contentEffect === "normal"
							? description.descriptionColor
							: description.descriptionHoverColor
					}
					onChange={handleDescriptionColor}
				></CustomColorPicker>
			)}
		</>
	);
}

export default Style;
