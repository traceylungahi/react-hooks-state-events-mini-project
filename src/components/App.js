import React, { useState }from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [task, setTask] = useState(TASKS);
  const [category, setCategory] = useState("All");
  function addTask(newTask) {
    setTask([...task, newTask]);
  }
  
  function deleteTask(deletedTask) {
    setTask(task.filter((task) => task.text !== deletedTask));
  }

  const seenTasks = task.filter(
    (task) => category === "All" || task.category === category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectedCategory={setCategory} />
      <div className="Task">
        <h4>Tasks</h4>
      </div>
      <NewTaskForm categories={CATEGORIES.filter((cat) => cat !== "All")} onTaskSubmit={addTask} />
      <TaskList onDeleteTask={deleteTask} tasks={seenTasks} />
    </div>
  );
}

export default App;
