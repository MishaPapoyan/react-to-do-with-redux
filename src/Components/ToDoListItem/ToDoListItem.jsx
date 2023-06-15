import React from 'react';
import styles from './todoListItem.module.css'
import {todoActions} from "../../store/actions";
import {deleteTodo} from "../../store/actions/toDoActions";
const ToDoListItem = ({todos}) => {
    const {name,count,id} = todos
    const chengeStatus = () => {
            todoActions.changeStatus(!false)
    }
    const deleteTodo = (id) =>{
        todoActions.deleteTodo(id)
    }
    return (
        <div className={styles.todolistitem}>
            <p>{count})</p>
            <p>{name}</p>
            <div className={styles.btn}>
                <button onClick={chengeStatus}>Done</button>
                <button onClick={deleteTodo}>Delete</button>
            </div>
        </div>
    );
};

export default ToDoListItem;