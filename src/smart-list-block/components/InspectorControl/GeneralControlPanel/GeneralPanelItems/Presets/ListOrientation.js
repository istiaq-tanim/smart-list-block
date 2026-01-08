function ListOrientation() {
	return (
		<div>
			<p>List Orientation</p>
			<div className="tabs">
				{tabItems.map((tab, index) => (
					<SingleTab
						tab={tab}
						key={index}
						isActive={selectedTab === tab.name}
						onHandleTab={onHandleTab}
						variant={variant}
					></SingleTab>
				))}
			</div>
		</div>
	);
}

export default ListOrientation;
