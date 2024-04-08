import "./PizzCard.css";
import pizzaData from "./data";
function PizzCard() {
  // console.log(pizzaData);
  return (
    <>
      {pizzaData.map((pizzEl, index) => {
        return (
          <div
            className={pizzEl.soldOut ? "pizzCardSold" : "pizzCard"}
            key={index}
          >
            <div>
              <img src={pizzEl.photoName} alt="img" />
            </div>
            <div className="pezaContaint">
              <h2>{pizzEl.name}</h2>
              <p>{pizzEl.ingredients}</p>
              <p>{pizzEl.soldOut ? "SoldOut" : pizzEl.price}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default PizzCard;
