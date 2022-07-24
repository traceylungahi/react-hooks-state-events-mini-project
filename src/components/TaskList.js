import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const taskList = tasks.map((task) => (
    <Task key={task.text} onDelete={onDeleteTask} text={task.text} category={task.category} />
  ));

  return <div>{taskList}</div>
}

export default TaskList;
