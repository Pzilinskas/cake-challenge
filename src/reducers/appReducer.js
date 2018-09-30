import { combineReducers } from 'redux'
import { cake } from './cakesReducer';

const app = combineReducers({
    cake
})

export default app