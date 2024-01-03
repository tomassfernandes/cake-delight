import { useRef, useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const navRef = useRef();
  const [isSticky, setSticky] = useState(false);

  function showNavBar() {
    navRef.current.classList.toggle("responsive-nav");
  }

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 800) {
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

  const headerClass = isSticky ? "header sticky" : "header";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
          </svg>
        </div>
      </div>
    </header>
  );
}
