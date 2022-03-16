import React from "react";

function NewTaskForm({taskCategories, taskFormInput, setTaskFormInput, tasks, setTasks, formCategory, setFormCategory}) {


// const optionElement = taskCategories.map((category) => {
// if(category !== "All") {
// return (<option key={category} value={category}>{category}</option>)
// }})

const optionElement = taskCategories.map((category) => {
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


// onSumbit event, needs to call back onTaskFormSubmit
// onTaskFormSubmit -- update setTasks state -- create new array and spread the current state of tasks and add the objects from the two inputs
