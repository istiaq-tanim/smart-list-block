import { listItems } from "../const";
function ListPreview() {
	return (
		<ul className="smart-list">
			{listItems.map((item, index) => {
				return (
					<li key={index}>
						<strong>{item.title}</strong>
						<p style={{ margin: "5px 0 0", fontSize: "14px", color: "#666" }}>
							{item.description}
						</p>
					</li>
				);
			})}
		</ul>
	);
}

export default ListPreview;
