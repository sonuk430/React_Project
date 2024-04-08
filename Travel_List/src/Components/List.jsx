import "./List.css";
import Item from "./Item";
function List({ items }) {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item 
            item={item} 
            key={item.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default List;
