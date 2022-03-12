import React from "react";
import TaskList from "./TaskList";

function Task({ category, text, handleDeleteButton, task}) {

  return (
    <div className="task" >
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleDeleteButton(task)}>X</button>
    </div>
  );
}

export default Task;
