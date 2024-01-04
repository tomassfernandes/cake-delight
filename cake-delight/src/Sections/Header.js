import { useRef, useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useCart } from "../CartContext";

export default function Header({ cartVisible, onToggleCart }) {
  const cartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
    >
      <circle
        cx="176"
        cy="416"
        r="16"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
      <circle
        cx="400"
        cy="416"
        r="16"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M48 80h64l48 272h256"
      />
      <path
        d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
    </svg>
  );

  const handleToggleCart = () => {
    // Call the parent component's function to update cartVisible
    onToggleCart();
  };

  const { cartState } = useCart();

  // Calculate the total number of items in the cart
  const totalItems = cartState.cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const navRef = useRef();
  const [isSticky, setSticky] = useState(false);

  function showNavBar() {
    navRef.current.classList.toggle("responsive-nav");
  }

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 600) {
        // Adjust this value based on when you want the header to become sticky
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass = isSticky && !cartVisible ? "header sticky" : "header";

  return (
    <header className={headerClass}>
      <div className="header-main-div">
        <div className="logo-letter-div">
          <p className="logo-letter logo-letter-1">Cake</p>
          <p className="logo-letter">Delight</p>
        </div>

        <nav ref={navRef} className="nav">
          <Link
            className="nav-link"
            to="cta-section"
            smooth={true}
            duration={500}
          >
            <span>H</span>ome
          </Link>

          <Link
            className="nav-link"
            to="shop-section"
            smooth={true}
            duration={500}
          >
            <span>S</span>hop
          </Link>

          <Link
            className="nav-link"
            to="about-us-section"
            smooth={true}
            duration={500}
          >
            <span>A</span>bout Us
          </Link>

          <Link className="nav-link" to="footer" smooth={true} duration={500}>
            <span>C</span>ontact
          </Link>

          <button onClick={showNavBar} className="nav-btn nav-close-btn">
            <svg
              style={{ fill: "white", color: "white", stroke: "white" }}
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
          </button>
        </nav>

        <div className="header-icons-div">
          <button onClick={showNavBar} className="nav-btn nav-menu-btn">
            <svg
              style={{ fill: "#383838", color: "#383838", stroke: "#383838" }}
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M80 160h352M80 256h352M80 352h352"
              />
            </svg>
          </button>
          <div className="cart-icon-main-div">
            <div className="cart-icon-div">
              <span className="cart-icon" onClick={handleToggleCart}>
                {cartIcon}
              </span>

              {totalItems > 0 ? (
                <div className="cart-icon-number">{totalItems}</div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
