import React, {useState} from "react";
import Task from "./Task"

function TaskList({ tasks, setTasks}) {
console.log(tasks)

function handleDeleteButton(task) {
  setTasks(tasks => tasks.filter(item => item !== task))
}

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <ul className="Items">
        {tasks.map((task) => (
         <Task category={task.category} text={task.text} key={task.text} handleDeleteButton={handleDeleteButton} task={task}/>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
