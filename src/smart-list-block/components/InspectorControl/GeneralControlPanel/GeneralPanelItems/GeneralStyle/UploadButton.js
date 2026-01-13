import Close from "../../../../../assets/Close";
import PlusIcon from "../../../../../assets/PlusIcon";
import Label from "../../../common/Label";

function UploadButton({ onClick, imageUrl }) {
	return (
		<div onClick={onClick} style={{ cursor: "pointer" }}>
			<Label label="Image"></Label>
			<div className="image-upload">
				{imageUrl ? (
					<div style={{ position: "relative", width: "100%", height: "100%" }}>
						<img
							src={imageUrl}
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
						></img>
						<button
							style={{
								position: "absolute",
								top: "8px",
								right: "8px",
								zIndex: 1,
							}}
						>
							<Close></Close>
						</button>
					</div>
				) : (
					<div>
						<PlusIcon></PlusIcon>
					</div>
				)}
			</div>
		</div>
	);
}

export default UploadButton;
