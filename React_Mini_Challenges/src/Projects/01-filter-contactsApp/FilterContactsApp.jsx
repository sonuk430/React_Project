import "./filterContactsApp.css";
import Card from "./Card";
import { usreData } from "./data";
import { useState } from "react";

const FilterContactsApp = () => {
  const [searchName, setSearchName] = useState("");

  return (
    <>
      <div className="filterWrapper">
        <h1>Search Filter App</h1>
        <div>
          <input
            type="text"
            placeholder="Search by First Name"
            onChange={(e) => setSearchName(e.currentTarget.value)}
          />
        </div>
        <div>
          <Card usreData={usreData} searchName={searchName} />
        </div>
      </div>
    </>
  );
};

export default FilterContactsApp;
