function SingleTab({ tab, onHandleTab, isActive, variant }) {
	return (
		<div
			role="button"
			className={`tab tab--${variant} ${isActive ? "active" : ""}`}
			onClick={() => onHandleTab(tab.name)}
		>
			{tab.icon && <span className="tab-icon">{tab.icon}</span>}
			{tab.title && <span className="tab-title">{tab.title}</span>}
		</div>
	);
}

export default SingleTab;
