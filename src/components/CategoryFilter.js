import React, {useState} from "react";

function CategoryFilter({categories, selectedCategory, changeSelectedCategory}) {


      return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((item) => {
       let classCSS = selectedCategory === item ? "selected" : ""
        return (<button className={classCSS} onClick={() => changeSelectedCategory(item)}>{item}</button>)
})}
      
    </div>
  );
}

export default CategoryFilter;
