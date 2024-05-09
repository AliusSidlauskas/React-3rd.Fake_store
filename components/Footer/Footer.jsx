import React, { useState, useEffect } from "react";
import TaskWrapper from "../ToDoTaskWrapper/TaskWrapper";
import styles from "../Footer/Footer.module.css";

const Footer = () => {
  // const [tasks, setTasks] = useState([
  //   { id: 1, isDone: false, title: "First task" },
  //   { id: 2, isDone: false, title: "Second task" },
  //   { id: 3, isDone: false, title: "Second task" },
  // ]);
  
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  const insertTask = () => {
    const newTask = {
      title: task,
      isDone: false,
      id: new Date(),
    };

    setTasks([...tasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...tasks,newTask]))
    setTask("");
  };

  return (
    <div className={styles.main}>
      <div className={styles.form}>
        <input value={task} onChange={(e) => setTask(e.target.value)} />
        <button on onClick={insertTask}>
          Add Task
        </button>
      </div>
      <TaskWrapper tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Footer;
