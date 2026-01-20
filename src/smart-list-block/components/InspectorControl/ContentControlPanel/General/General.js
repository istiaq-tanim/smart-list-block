import useBlockContext from "../../../../hooks/useBlockContext";
import ToggleControlButton from "../../common/ToggleButton/ToggleButton";
import CustomRangeControl from "../../common/RangeControl/CustomRangeControl";
function General() {
	const { attributes, setAttributes } = useBlockContext();
	const { title, description } = attributes;

	return (
		<div>
			<ToggleControlButton
				label="Title"
				checked={title.show}
				onChange={(value) =>
					setAttributes({ title: { ...title, show: value } })
				}
			></ToggleControlButton>
			<ToggleControlButton
				label="Description"
				checked={description.show}
				onChange={(value) =>
					setAttributes({ description: { ...description, show: value } })
				}
			></ToggleControlButton>
			{description.show && (
				<CustomRangeControl
					label="Title to Description Gap"
					attributeKey="gapTitleToDescription"
					min={0}
					max={100}
					defaultValue={6}
				></CustomRangeControl>
			)}
		</div>
	);
}

export default General;
