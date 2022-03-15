import React from "react";

function NewTaskForm({taskCategories, taskFormInput, setTaskFormInput}) {

function handleInput(event) {
  setTaskFormInput(event.target.value)
}

console.log("taskFormInput====>>>", taskFormInput)

const optionElement = taskCategories.map((category) => {
if(category !== "All") {
return (<option key={category}>{category}</option>)
}})

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleInput} value={taskFormInput}/>
      </label>
      <label>
        Category
        <select name="category">
          {optionElement}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
