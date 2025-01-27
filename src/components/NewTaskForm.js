import React from "react";

function NewTaskForm({categories, taskFormInput, setTaskFormInput, tasks, setTasks, formCategory, setFormCategory}) {


const optionElement = categories.map((category) => {
  if(category !== "All") 
  return (<option key={category} value={category}>{category}</option>)
})


function onTaskFormSubmit(event) {
event.preventDefault()
const newArr = [...tasks, {"text": taskFormInput, "category": formCategory}] 
setTasks(newArr)
}

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(event) => setTaskFormInput(event.target.value)} value={taskFormInput}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(event) => setFormCategory(event.target.value)} >
          {optionElement}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;



