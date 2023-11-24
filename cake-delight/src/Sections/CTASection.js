import React, { useState, useEffect } from "react";

export default function CTASection() {
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsNarrowScreen(window.innerWidth <= 55 * 16); // 1 em = 16 pixels
    };

    handleResize(); // Set initial screen width

    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup the event listener when the component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="cta-section">
      <div className="section">
        <div className="cta-grid">
          <div className="cta-left-grid">
            <h1 className="heading-primary">
              Satisfy Your Cravings, Order Now!
            </h1>
            <p className="cta-p">
              Craving a slice of heaven? Our delectable cakes are here to
              satisfy your sweetest desires. Made with love and the finest
              ingredients, these creations are more than just desserts, they're
              moments of pure bliss. Embark on a journey of irresistible flavors
              that will leave your taste buds yearning for more.
            </p>
            <div className="cta-btn-div">
              <button className="cta-btn cta-btn-1">
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                </svg>
              </button>
              <button className="cta-btn cta-btn-2">
                SHOP CAKES
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M160-80q-17 0-28.5-11.5T120-120v-200q0-33 23.5-56.5T200-400v-160q0-33 23.5-56.5T280-640h160v-58q-18-12-29-29t-11-41q0-15 6-29.5t18-26.5l56-56 56 56q12 12 18 26.5t6 29.5q0 24-11 41t-29 29v58h160q33 0 56.5 23.5T760-560v160q33 0 56.5 23.5T840-320v200q0 17-11.5 28.5T800-80H160Zm120-320h400v-160H280v160Zm-80 240h560v-160H200v160Zm80-240h400-400Zm-80 240h560-560Zm560-240H200h560Z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="cta-right-grid">
            <img
              className="cta-cake-img"
              src="/img/cta-cake.webp"
              alt="Cake with strawberries"
            ></img>
          </div>
        </div>
      </div>
      <div className="icing-separator">
        <img
          className="icing-img"
          src={isNarrowScreen ? "/img/icing-phone.png" : "/img/icing.png"}
          alt="icing separating sections"
        ></img>
      </div>
    </section>
  );
}
