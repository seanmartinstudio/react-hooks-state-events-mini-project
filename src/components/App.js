import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// import { useState } from "react/cjs/react.production.min";

function App() {

const [tasks, setTasks] = useState(TASKS)
const [category, setCategory] = useState("All")


function changeSelectedCategory(newCategory) {
setTasks(tasks => tasks.filter(item => item.category === newCategory))
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} changeSelectedCategory={changeSelectedCategory} />
      <NewTaskForm />
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
