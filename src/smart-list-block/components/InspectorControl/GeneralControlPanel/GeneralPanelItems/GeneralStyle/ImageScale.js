import { imageScales } from "../../../../../const";
import useBlockContext from "../../../../../hooks/useBlockContext";
import Label from "../../../common/Label";
import Tabs from "../../../common/Tabs/Tabs";

function ImageScale() {
	const { attributes, setAttributes } = useBlockContext();
	const { backgroundStyle } = attributes;
	const selectedTab = backgroundStyle.backgroundSize || "auto";

	const handleTab = (value) => {
		setAttributes({
			backgroundStyle: { ...backgroundStyle, backgroundSize: value },
		});
	};
	return (
		<>
			<Label label="Image Scale"></Label>
			<br />
			<Tabs
				tabItems={imageScales}
				onHandleTab={handleTab}
				selectedTab={selectedTab}
				variant="only-text"
			></Tabs>
		</>
	);
}

export default ImageScale;
