import Header from "./Sections/Header";
import CTASection from "./Sections/CTASection";
import InfoSection from "./Sections/InfoSection";
import ShopSection from "./Sections/ShopSection";
import BestSellerSection from "./Sections/BestSellerSection";
import OurStoreSection from "./Sections/OurStoreSection";
import ComingSoonSection from "./Sections/ComingSoonSection";
import Cart from "./Cart";
import Footer from "./Sections/Footer";

import { useState } from "react";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const handleToggleCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <>
      <Header cartVisible={cartVisible} onToggleCart={handleToggleCart} />
      <CTASection />
      <InfoSection />
      <ShopSection />
      <BestSellerSection />
      <OurStoreSection />
      <ComingSoonSection />
      <Cart cartVisible={cartVisible} onToggleCart={handleToggleCart} />
      <Footer />
    </>
  );
}

export default App;
