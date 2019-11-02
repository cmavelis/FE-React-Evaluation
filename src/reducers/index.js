import { combineReducers } from 'redux';
import user from './user';
import interests from './interests';


export default combineReducers({ user, interests });
