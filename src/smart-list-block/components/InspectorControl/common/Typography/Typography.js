function Typography({ label }) {
	return (
		<div className="custom-range-control">
			<div className="range-control">
				<div className="content">
					<div className="range-label">
						<p>{label}</p>
					</div>
				</div>
			</div>

			<Popover
				position="middle right"
				onClose={() => setIsOpen(false)}
				className="color-popover"
				usePortal={false}
			>
				<ColorPicker
					color={value}
					onChangeComplete={handleColorChange}
					enableAlpha
				/>
			</Popover>
		</div>
	);
}

export default Typography;
