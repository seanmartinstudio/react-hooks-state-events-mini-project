import React from "react";
import TaskList from "./TaskList";

function Task({ category, text, newTasks}) {

 function handleDeleteButton() {
  
 }

 
  return (
    <div className="task" >
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteButton}>X</button>
    </div>
  );
}

export default Task;
