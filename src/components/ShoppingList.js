import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setCategory] = useState("All")

  const catFunc = (event) => {
    // console.log(event.target.value)
    setCategory(event.target.value)}

    const filteredArray = items.filter((item) => {
      if(selectedCategory !== "All") {
      return item.category === selectedCategory} else {
        return item
      }})

    const itemElements = filteredArray.map((item) => {
        return (<Item key={item.id} name={item.name} category={item.category} /> )})

    console.log("selectedCategory") 
    console.log(selectedCategory)
    console.log("itemElements")
    console.log(itemElements)

    //const filteredElements = itemElements.filter(item => console.log(item.category))}

    //.log("filteredElements")
    //console.log(filteredElements)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={catFunc}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemElements}
      </ul>
    </div>
  );
}

export default ShoppingList;
