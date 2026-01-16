import useBlockContext from "../../../../hooks/useBlockContext";
import ToggleControlButton from "../../common/ToggleButton/ToggleButton";

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
		</div>
	);
}

export default General;
