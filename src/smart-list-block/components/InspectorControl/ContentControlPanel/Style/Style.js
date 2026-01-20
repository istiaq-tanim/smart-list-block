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
		setAttributes({ title: { ...title, color: value } });
	};

	const handleDescriptionColor = (value) => {
		setAttributes({ description: { ...description, color: value } });
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
				value={title.color}
				onChange={handleTextColor}
			></CustomColorPicker>
			{description.show && (
				<CustomColorPicker
					label="Description Color"
					value={description.color}
					onChange={handleDescriptionColor}
				></CustomColorPicker>
			)}
		</>
	);
}

export default Style;
