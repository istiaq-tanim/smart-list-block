function SingleTab({
	tab,
	onHandleTab,
	isActive,
	variant,
	activeColor = "#fff",
	inactiveColor = "#757575",
}) {
	return (
		<div
			role="button"
			className={`tab tab--${variant} ${isActive ? "active" : ""}`}
			onClick={() => onHandleTab(tab.name)}
		>
			{tab.icon && (
				<span
					className="tab-icon"
					style={{ color: isActive ? activeColor : inactiveColor }}
				>
					{tab.icon}
				</span>
			)}
			{tab.title && <span className="tab-title">{tab.title}</span>}
		</div>
	);
}

export default SingleTab;
