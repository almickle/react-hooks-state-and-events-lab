import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

import { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [mode, setMode] = useState(0)

  const appClass = mode ? "App dark" : "App light"

  const changeState = () => {
    
    if(mode === 0) {setMode(mode + 1)}
    if(mode === 1) {setMode(mode - 1)}
  
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeState}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
