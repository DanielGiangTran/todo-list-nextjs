import React from "react";
import styles from "./TodoItem.module.css";
function TodoItem({ todos }) {
  return (
    <div className={styles.todo} key={todos.id}>
      <div className={todos.completed ? styles.done : null}>{todos.title}</div>
    </div>
  );
}

export default TodoItem;
