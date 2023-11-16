import ShopItem from "../Items/ShopItem";

export default function ShopSection() {
  return (
    <section className="section shop-section">
      <h2 className="shop-heading">Shop</h2>
      <div className="type-cake-div">
        <p className="cake-type">All</p>
        <p className="cake-type">Vegetarian</p>
        <p className="cake-type">Vegan</p>
      </div>
      <div className="shop-grid">
        <ShopItem />
      </div>
    </section>
  );
}
