import "./List.css";
import Item from "./Item";
function List({ items,onToggleItem, onDeleteItem }) {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item item={item} key={item.id}   onToggleItem={onToggleItem}  onDeleteItem={onDeleteItem} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default List;
