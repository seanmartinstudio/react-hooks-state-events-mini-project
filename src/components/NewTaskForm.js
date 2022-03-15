import React, {useState} from "react";

function NewTaskForm({taskCategories}) {

const [formInput, setFormInput] = useState("")

function handleInput(event) {
  setFormInput(event.taget.value)
}



const optionElement = taskCategories.map((category) => {
if(category !== "All")
return (<option key={category}>{category}</option>)
})



  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleInput} value={formInput}/>
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
