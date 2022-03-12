import React, {useState} from "react";
import Task from "./Task"

function TaskList({ tasks }) {

const [newTasksArray, setNewTasksArray] = useState(tasks)

function handleDeleteButton(task) {
  setNewTasksArray(newTasksArray => newTasksArray.filter(tak => tak !== task))
}

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <ul className="Items">
        {newTasksArray.map((task) => (
         <Task category={task.category} text={task.text} key={task.text} handleDeleteButton={handleDeleteButton} task={task}/>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
