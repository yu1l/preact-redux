import { UPDATE_USER, SHOW_ERROR, REQUEST_MADE } from '../actions/user-action'

export default function userReducer(state = '', { type, payload }) {
	switch (type) {
		case UPDATE_USER:
            return payload.user
        case SHOW_ERROR:
            return payload.user
        case REQUEST_MADE:
            return payload.user
        default:
            return state
	}
};
