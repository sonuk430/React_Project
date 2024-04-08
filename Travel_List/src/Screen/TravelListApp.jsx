import "./TravelListApp.css";
import AddForm from "../Components/AddForm";
import List from "../Components/List";
import { useState } from "react";

function TravelListApp() {
  const [items, setItems] = useState([]);

//    this function teke item from AddForm;
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  console.log(items);
  return (
    <>
      <header>
        <h1>🏝️ Far Away 🧳</h1>
      </header>
      <AddForm onAddItems={handleAddItems} />
      {/* send the items Array in List Componet For rendring */}
      <List items = {items}  />
    </>
  );
}

export default TravelListApp;
