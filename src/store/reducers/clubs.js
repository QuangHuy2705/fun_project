import {LOAD_CLUBS} from "../actions/actionTypes";

export default (state=[], action) => {
	switch(action.type) {
		case LOAD_CLUBS:
			return [...action.payload]
		default:
			return state;
	}
}