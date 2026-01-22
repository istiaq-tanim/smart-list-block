import { useBlockProps } from "@wordpress/block-editor";

export default function save() {
	return (
		<p {...useBlockProps.save()}>
			{"Smart List Block – hello from the saved content!"}
		</p>
	);
}
