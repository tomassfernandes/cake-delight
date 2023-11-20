import ShopItem from "../Items/ShopItem";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function ShopSection() {
  const [displayAllCakes, setDisplayAllCakes] = useState(false);
  const [viewMoreText, setViewMoreText] = useState("View More");
  const [arrowRotation, setArrowRotation] = useState(0);
  const [cakeType, setCakeType] = useState("All Cakes");

  const handleViewMoreClick = () => {
    setDisplayAllCakes(!displayAllCakes);
    setViewMoreText(displayAllCakes ? "View More" : "Show Less");
    setArrowRotation(displayAllCakes ? 0 : 180);
  };

  const handleCakeTypeClick = (type) => {
    setDisplayAllCakes(false);
    setCakeType(type.toLowerCase());
  };

  useEffect(() => {
    if (displayAllCakes) {
      setViewMoreText("Show Less");
      setArrowRotation(180);
    } else {
      setViewMoreText("View More");
      setArrowRotation(0);
    }
  }, [displayAllCakes]);

  return (
    <section id="shop-section" className="section shop-section">
      <h2 className="heading-secondary">Shop</h2>
      <div className="type-cake-div">
        <p
          className="cake-type"
          onClick={() => handleCakeTypeClick("All Cakes")}
        >
          All Cakes
        </p>
        <p
          className="cake-type"
          onClick={() => handleCakeTypeClick("vegetarian")}
        >
          Vegetarian
        </p>
        <p className="cake-type" onClick={() => handleCakeTypeClick("vegan")}>
          Vegan
        </p>
      </div>
      <div className="shop-grid">
        <ShopItem displayAllCakes={displayAllCakes} cakeType={cakeType} />
      </div>

      {cakeType.toLowerCase() === "all cakes" &&
        viewMoreText === "View More" && (
          <button className="view-more-btn" onClick={handleViewMoreClick}>
            {viewMoreText}
            <span
              className="view-more-icon"
              style={{ transform: `rotate(${arrowRotation}deg)` }}
            >
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
        )}

      {cakeType.toLowerCase() === "all cakes" &&
        viewMoreText === "Show Less" && (
          <Link
            to="shop-section"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
          >
            <button className="view-more-btn" onClick={handleViewMoreClick}>
              {viewMoreText}
              <span
                className="view-more-icon"
                style={{ transform: `rotate(${arrowRotation}deg)` }}
              >
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
          </Link>
        )}
    </section>
  );
}
