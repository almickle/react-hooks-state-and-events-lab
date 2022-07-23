import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, addToCart] = useState("")
  const [cartText, changeType] = useState("Add to Cart")

  const putInCart = () => {
    
    if(inCart === "") {
      addToCart("in-cart")
      changeType("Remove from Cart")
    }
    if(inCart === "in-cart") {
      addToCart("")
      changeType("Add to Cart")
  }
  
  }

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={putInCart}>{cartText}</button>
    </li>
  );
}

export default Item;
