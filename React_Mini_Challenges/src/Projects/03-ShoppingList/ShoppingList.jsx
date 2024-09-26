import { useEffect, useState } from "react";
import "./shoppingList.css";
const ShoppingList = () => {
  const [userSearch, setUserSearch] = useState(null);

  const getData = async () => {
    const res = await fetch(
      `https://api.frontendeval.com/fake/food/${userSearch}`
    );
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="shoppingList">
        <h2>Shopping List</h2>
        <div>
          <input type="text" onChange={(e) => setUserSearch(e.target.value)} />
        </div>

        <div>
          <ul>
            <li>Milk</li>
            <li>Milk</li>
            <li>Milk</li>
            <li>Milk</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ShoppingList;
