import { useContext } from "@wordpress/element";
import { BlockContext } from "../context";

const useBlockContext = () => {
	const context = useContext(BlockContext);

	if (!context) {
		throw new Error("useBlockContext must be used within a BlockProvider");
	}
	return context;
};

export default useBlockContext;
