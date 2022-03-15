import React from "react";

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
