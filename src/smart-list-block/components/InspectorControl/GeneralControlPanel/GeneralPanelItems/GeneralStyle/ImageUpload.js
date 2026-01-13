import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import UploadButton from "./UploadButton";

function ImageUpload({ onChange, value }) {
	const ALLOWED_MEDIA_TYPES = ["image"];

	const handleImageSelect = (media) => {
		if (media?.url) {
			onChange(media.url);
		}
	};

	return (
		<div className="background-image-upload">
			<MediaUploadCheck>
				<MediaUpload
					allowedTypes={ALLOWED_MEDIA_TYPES}
					onSelect={handleImageSelect}
					value={value}
					render={({ open }) => (
						<UploadButton onClick={open} imageUrl={value}></UploadButton>
					)}
				/>
			</MediaUploadCheck>
		</div>
	);
}

export default ImageUpload;
