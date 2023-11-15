export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-section-main-div">
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
              <button className="cta-btn cta-btn-1">Contact Us</button>
              <button className="cta-btn cta-btn-2">SHOP CAKES</button>
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
          src="/img/icing.png"
          alt="icing separating sections"
        ></img>
      </div>
    </section>
  );
}
