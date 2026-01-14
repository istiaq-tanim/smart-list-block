import { backGroundStyles } from "../../../../../const";
import useBlockContext from "../../../../../hooks/useBlockContext";
import Label from "../../../common/Label";
import Tabs from "../../../common/Tabs/Tabs";
import BackgroundOverlay from "./BackgroundOverlay";
import GradientBackground from "./GradientStyle";
import ImageScale from "./ImageScale";
import ImageUpload from "./ImageUpload";

function BackgroundStyle() {
	const { attributes, setAttributes } = useBlockContext();
	const { backgroundStyle } = attributes;
	const selectedTab = backgroundStyle.type || "solid";
	const { backgroundOverlay } = backgroundStyle;

	const handleTab = (tabName) => {
		setAttributes({
			backgroundStyle: {
				...backgroundStyle,
				type: tabName,
			},
		});
	};

	const handleGradientChange = (value) => {
		setAttributes({
			backgroundStyle: { ...backgroundStyle, background: value },
		});
	};
	const handleImageChange = (value) => {
		setAttributes({
			backgroundStyle: { ...backgroundStyle, image: value },
		});
	};

	const handleOverlayChange = (value) => {
		setAttributes({
			backgroundStyle: { ...backgroundStyle, backgroundOverlay: value },
		});
	};

	const renderBackgroundControl = () => {
		switch (selectedTab) {
			case "gradient":
				return (
					<GradientBackground
						value={backgroundStyle.background}
						onChange={handleGradientChange}
					></GradientBackground>
				);
			case "image":
				return (
					<>
						<ImageUpload
							onChange={handleImageChange}
							value={backgroundStyle.image || ""}
						></ImageUpload>
						<ImageScale></ImageScale>
						<BackgroundOverlay
							value={backgroundOverlay}
							onChange={handleOverlayChange}
						></BackgroundOverlay>
					</>
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
