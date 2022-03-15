import React from "react";

function CategoryFilter({categories, selectedCategory, changeSelectedCategory}) {

const categoryButtons = categories.map((category) => {
const classN = category === selectedCategory ? "selected" : ""
return (<button className={classN} key={category} onClick={() => changeSelectedCategory(category)}>{category}</button>)
})



      return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
