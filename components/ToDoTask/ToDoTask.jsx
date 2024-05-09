import React from "react";
import styles from "./ToDoTask.module.css";

const ToDoTask = ({ id, title, isDone, setTasks, tasks }) => {
  const changeTaskStatus = () => {
    const index = tasks.findIndex((task) => task.id === id);

    const tasksClone = tasks;

    tasksClone[index].isDone = !isDone;

    setTasks([...tasksClone]);
    localStorage.setItem("tasks", JSON.stringify([...tasksClone]))
  };

  return (
    <div
      className={`${styles.main} ${
        isDone ? styles.completed : styles.notCompleted
      }`}
      onClick={changeTaskStatus}
    >
      <h2>{title}</h2>
      {isDone ? <h4>Completed</h4> : <h4>Not Completed</h4>}
    </div>
  );
};

export default ToDoTask;
