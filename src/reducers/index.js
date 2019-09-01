import {combineReducers} from 'redux';
import MenuReducer from './menu';
import ActiveMenu from './menu-active';
import MenuContent from './content-menu';

const allReducers=combineReducers({
	menus:MenuReducer,
	activeMenu:ActiveMenu,
	content:MenuContent
});


export default allReducers;