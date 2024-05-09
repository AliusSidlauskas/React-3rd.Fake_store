import React from "react";
import styles from "./TaskWrapper.module.css";
import ToDo from "../ToDoTask/ToDoTask";

const TaskWrapper = ({ tasks, setTasks }) => {
  return (
    <div className={styles.main}>
      {tasks.map((task) => (
        <ToDo
          key={task.id}
          id={task.id}
          title={task.title}
          isDone={task.isDone}
          setTasks={setTasks}
          tasks={tasks}
        />
      ))}
    </div>
  );
};

export default TaskWrapper;
