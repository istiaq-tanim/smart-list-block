import Close from "../../../../../assets/Close";
import PlusIcon from "../../../../../assets/PlusIcon";
import Label from "../../../common/Label";

function UploadButton({ onClick, imageUrl, onRemove }) {
	const handleRemove = (e) => {
		e.stopPropagation();
		e.preventDefault();
		onRemove();
	};
	return (
		<div style={{ cursor: "pointer" }}>
			<Label label="Image"></Label>
			<div onClick={!imageUrl ? onClick : undefined} className="image-upload">
				{imageUrl ? (
					<div style={{ position: "relative", width: "100%", height: "100%" }}>
						<img
							src={imageUrl}
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
						></img>
						<button
							onClick={handleRemove}
							type="button"
							style={{
								position: "absolute",
								top: "8px",
								right: "8px",
								zIndex: 10,
								cursor: "pointer",
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
