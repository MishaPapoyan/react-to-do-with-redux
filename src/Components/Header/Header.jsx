import React, {useRef, useState} from 'react';
import styles from './header.module.css';
import {useDispatch, useSelector} from "react-redux";
import { selectTodos, isDone} from "../../store/selectors/toDoSelector";
import {todoActions} from "../../store/actions";
const Header = () => {
    const todos = useSelector(selectTodos)
    const done = useSelector(isDone)
    console.log(done)
    const inputRef = useRef(null);
    const dispatch = useDispatch()
    const addToDo = (e) => {
        e.preventDefault()
        const inputName = inputRef.current.value
        dispatch(todoActions.addToDo({
            name: inputName,
            id: new Date().getMilliseconds(),
            // isDone: false,
            isDone: done,
            count: 1
        }))
        console.log(todos.todos)
    }
    return (
        <div className={styles.main}>
            <p className={styles.welcome_text}>
                Welcome to the ToDo App! Stay organized and keep track of your tasks effortlessly. <br/> Add, delete, and update your todos with ease. <br/>  Boost your productivity and achieve your goals one task at a time. <br/> Start managing your tasks efficiently with our intuitive ToDo App today!
            </p>
            <form action="">
                <input ref={inputRef} className={styles.todoinput} type="text" placeholder={"add yor to do's"}/>
                <button onClick={addToDo} >Add</button>
            </form>
        </div>
    );
};

export default Header;

