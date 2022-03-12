import React, {useState} from "react";

function CategoryFilter({categories}) {

  const [newCategoryArray, setCategoryArray] = useState(categories)

  console.log("Categories=>", newCategoryArray)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {newCategoryArray.map((item) => (
        <button className="categories" >{item}</button>
      ))}
      

    </div>
  );
}

export default CategoryFilter;
