import { combineReducers } from 'redux'
import { cake } from './cakeReducer';

const app = combineReducers({
    cake
})

export default app