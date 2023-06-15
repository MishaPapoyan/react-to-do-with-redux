import React from 'react';
import styles from './toDo.module.css'
import {useSelector} from "react-redux";
import {selectTodos} from "../../store/selectors/toDoSelector";
import ToDoListItem from "../ToDoListItem/ToDoListItem";
const Todo = () => {
    const state = useSelector(selectTodos);
    return (
        <div className={styles.main}>
            <div>
                {
                    state.todos.map((todo, i) =>{
                        return <ToDoListItem key={i} todos={todo} />
                    })
                }
            </div>
        </div>
    );
};

export default Todo;