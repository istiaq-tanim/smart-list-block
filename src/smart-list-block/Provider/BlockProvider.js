import { BlockContext } from "../context";

function BlockProvider({ children, attributes, setAttributes }) {
	const value = { attributes, setAttributes };
	return (
		<BlockContext.Provider value={value}>{children}</BlockContext.Provider>
	);
}

export default BlockProvider;
