
import user from './user';
import page from './page.js'
import { combineReducers } from 'redux'
const allReducers = combineReducers({
    user: user,
    page: page
})
export default allReducers;