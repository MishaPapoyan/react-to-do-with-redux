import ToDoReducer from './TodoReducer'
import {combineReducers} from "redux";
const root = combineReducers({
    todos: ToDoReducer
})
export default root