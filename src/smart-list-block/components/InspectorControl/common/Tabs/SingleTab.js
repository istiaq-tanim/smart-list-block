function SingleTab({ tab, onHandleTab, isActive, variant, color }) {
	return (
		<div
			role="button"
			className={`tab tab--${variant} ${isActive ? "active" : ""}`}
			onClick={() => onHandleTab(tab.name)}
		>
			{tab.icon && (
				<span
					className="tab-icon"
					style={{ color: isActive ? "#fff" : "#757575" }}
				>
					{tab.icon}
				</span>
			)}
			{tab.title && <span className="tab-title">{tab.title}</span>}
		</div>
	);
}

export default SingleTab;
