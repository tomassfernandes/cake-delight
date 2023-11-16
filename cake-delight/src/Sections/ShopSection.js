import ShopItem from "../Items/ShopItem";

export default function ShopSection() {
  return (
    <section className="section shop-section">
      <h2 className="heading-secondary">Shop</h2>
      <div className="type-cake-div">
        <p className="cake-type">All Cakes</p>
        <p className="cake-type">Vegetarian</p>
        <p className="cake-type">Vegan</p>
      </div>
      <div className="shop-grid">
        <ShopItem />
      </div>
      <button className="view-more-btn">
        View More{" "}
        <span className="view-more-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
      </button>
    </section>
  );
}
