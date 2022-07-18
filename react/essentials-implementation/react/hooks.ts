import { reRender } from "../react-dom/renderer";
import { handleStateUpdateCb } from "./utils/handleStateUpdateCb";

const hooksState: any[] = [];
let cursorIndex = 0;

function resetCursorIndex() {
	cursorIndex = 0;
}

export function useState(initialState): [any, ((newState) => void)] {
	// frozenCursor acts as an inclosed (via a closure) value to track each useState instances index within the hooksState array.
	let frozenCursor = cursorIndex;
	hooksState[frozenCursor] = hooksState[frozenCursor] || handleStateUpdateCb(initialState);

	const setState = (newState): void => {
		hooksState[frozenCursor] = handleStateUpdateCb(newState);
		// Resets the cursor so the proper state can be used via index on next render.
		resetCursorIndex();
		reRender();
	};

	// Increments the cursor so the next useState call gets its own index.
	cursorIndex++;
	return [hooksState[frozenCursor], setState];
}