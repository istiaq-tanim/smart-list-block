import SingleTab from "./SingleTab";
function Tabs({ tabItems, onHandleTab, selectedTab, variant = "underline" }) {
	return (
		<div className={`tabs tabs--${variant}`}>
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
	);
}

export default Tabs;
