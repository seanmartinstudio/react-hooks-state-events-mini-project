import React, {useState} from "react";

function CategoryFilter({categories}) {

  const [newCategoryArray, setCategoryArray] = useState(categories)
  const [buttonClassName, setButtonClassName] = useState("")
  

function handleButtonClassName() {
 setButtonClassName((buttonClassName) => buttonClassName = "selected" )
}

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {newCategoryArray.map((item) => (
        <button className={buttonClassName} onClick={handleButtonClassName}>{item}</button>
      ))}
      
    </div>
  );
}

export default CategoryFilter;
