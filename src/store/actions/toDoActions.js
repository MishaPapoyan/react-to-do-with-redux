import { ADD_TODO, CHANGE_STATUS, DELETE_TODO } from "../types/toDoTypes";

const addToDo = (payload) => {
	return {
		type: ADD_TODO,
		payload
	}
}
const deleteTodo = (id) => {
	return {
		type: DELETE_TODO,
		payload: id
	}
}

const changeStatus = (isDone) => {
	return {
		type: CHANGE_STATUS,
		payload: isDone
	}
}

export {
	addToDo,
	deleteTodo,
	changeStatus
}