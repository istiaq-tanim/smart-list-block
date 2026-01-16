import useBlockContext from "../../../../hooks/useBlockContext";
import Typography from "../../common/Typography/Typography";

function Style() {
	const { attributes, setAttributes } = useBlockContext();
	const { title, description } = attributes;

	return (
		<>
			<Typography
				label="Title Typography"
				attributeKey="title"
				onChange={(value) => setAttributes({ title: value })}
				values={title}
			></Typography>
			{description.show && (
				<Typography
					label="Description Typography"
					attributeKey="description"
					onChange={(value) => setAttributes({ description: value })}
					values={description}
				></Typography>
			)}
		</>
	);
}

export default Style;
