import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// import { useState } from "react/cjs/react.production.min";

function App() {

const [tasks, setTasks] = useState(TASKS)
const [category, setCategory] = useState("All")
const [taskFormInput, setTaskFormInput] = useState("")

const filteredItems = tasks.filter(task => category === "All" || task.category === category)


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} changeSelectedCategory={setCategory} />
      <NewTaskForm taskCategories={CATEGORIES} taskFormInput={taskFormInput} setTaskFormInput={setTaskFormInput}/>
      <TaskList setTasks={setTasks} tasks={filteredItems}/>
    </div>
  );
}

export default App;
