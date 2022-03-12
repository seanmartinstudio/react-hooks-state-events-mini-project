import React, {useState} from "react";
import Task from "./Task"

function TaskList({ tasks }) {

const [newTasks, changeNewTasks] = useState(tasks)

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <ul className="Items">
        {newTasks.map((items) => (
         <Task category={items.category} text={items.text} key={items.text} newTasks={newTasks}/>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
