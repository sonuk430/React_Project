import "./PizzaMenu.css";
import PizzCard from "../Components/PizzCard";

function PizzaMenu() {
  return (
    <>
      <main>
        <div className="hero-heading">
          <h2>- FAST REACT PIZZA CO. -</h2>
          <h3>OUR MENU</h3>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
        </div>
        <div className="pizzContainer">
          <PizzCard />
        </div>
        <div className="footer">
          <p>We're open from 12:00 to 22:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      </main>
    </>
  );
}

export default PizzaMenu;
