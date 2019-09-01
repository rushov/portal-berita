import { USERS_SECLECTED} from '../actions';

export default function (state={},action){
	switch(action.type){
		case USERS_SECLECTED:
			return { ...state, json: action.json, loading: false };
		default:
			return state;
	}
};