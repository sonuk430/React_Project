import { useState } from "react";
import "./AddForm.css";

function AddForm({ onAddItems }) {
  const [optionVal, setOptionVal] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) {
      alert("Item Fill....");
      return;
    }

    const userData = {
      optionVal,
      description,
      id: Date.now(),
      packed: false,
    };
    onAddItems(userData);
    setOptionVal(1);
    setDescription("");
  }

  return (
    <>
      <form className="Add-form" action="submited" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select
          value={optionVal}
          onChange={(e) => setOptionVal(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default AddForm;
