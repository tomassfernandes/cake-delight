import Header from "./Sections/Header";
import CTASection from "./Sections/CTASection";
import InfoSection from "./Sections/InfoSection";
import ShopSection from "./Sections/ShopSection";
import BestSellerSection from "./Sections/BestSellerSection";
import OurStoreSection from "./Sections/OurStoreSection";
import ComingSoonSection from "./Sections/ComingSoonSection";
import Cart from "./Cart";
import Footer from "./Sections/Footer";

function App() {
  return (
    <>
      <Header />
      <CTASection />
      <InfoSection />
      <ShopSection />
      <BestSellerSection />
      <OurStoreSection />
      <ComingSoonSection />
      <Cart />
      <Footer />
    </>
  );
}

export default App;
