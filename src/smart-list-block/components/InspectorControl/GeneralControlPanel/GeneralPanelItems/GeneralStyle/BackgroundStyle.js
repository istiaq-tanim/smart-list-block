import { backGroundStyles } from "../../../../../const";
import useBlockContext from "../../../../../hooks/useBlockContext";
import Label from "../../../common/Label";
import Tabs from "../../../common/Tabs/Tabs";
import GradientBackground from "./GradientStyle";
import ImageUpload from "./ImageUpload";

function BackgroundStyle() {
	const { attributes, setAttributes } = useBlockContext();
	const { backgroundStyle } = attributes;
	const selectedTab = backgroundStyle.type || "solid";
	const handleTab = (tabName) => {
		//Handle Default value based on tab change
		let defaultValue = "";
		if (tabName === "gradient") {
			defaultValue =
				"linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)";
		}
		setAttributes({
			backgroundStyle: { background: defaultValue, type: tabName },
		});
	};

	const handleChange = (value) => {
		setAttributes({
			backgroundStyle: { ...backgroundStyle, background: value },
		});
	};

	const renderBackgroundControl = () => {
		switch (selectedTab) {
			case "gradient":
				return (
					<GradientBackground
						value={backgroundStyle.background}
						onChange={handleChange}
					></GradientBackground>
				);
			case "image":
				return (
					<ImageUpload
						onChange={handleChange}
						value={backgroundStyle.background}
					></ImageUpload>
				);
			case "solid":
			default:
				return null;
		}
	};

	return (
		<>
			<div className="background-style">
				<Label label="Background Style"></Label>
				<Tabs
					tabItems={backGroundStyles}
					onHandleTab={handleTab}
					selectedTab={selectedTab}
					variant="smallIcon"
				></Tabs>
			</div>
			{renderBackgroundControl()}
		</>
	);
}

export default BackgroundStyle;
