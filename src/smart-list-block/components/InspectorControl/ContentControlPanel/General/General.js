import useBlockContext from "../../../../hooks/useBlockContext";
import ToggleControlButton from "../../common/ToggleButton/ToggleButton";

function General() {
	const { attributes, setAttributes } = useBlockContext();
	const { title, description } = attributes;
	return (
		<div>
			<ToggleControlButton
				label="Title"
				checked={title}
				onChange={(value) => setAttributes({ title: value })}
			></ToggleControlButton>
			<ToggleControlButton
				label="Description"
				checked={description}
				onChange={(value) => setAttributes({ description: value })}
			></ToggleControlButton>
		</div>
	);
}

export default General;
