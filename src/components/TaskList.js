import React, {useState} from "react";
import Task from "./Task"

function TaskList({tasks, setTasks}) {

const taskElement = tasks.map((task) => { 
  return (<Task category={task.category} text={task.text} key={task.text} handleDeleteButton={handleDeleteButton} task={task}/>)})

function handleDeleteButton(task) {
  setTasks(tasks => tasks.filter(item => item !== task))
}

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <ul className="Items">
        {taskElement}
      </ul>
    </div>
  );
}

export default TaskList;
