import Header from "../components/header/Header";
import FlashSale from "../components/FlashSale";
import BrowseByCategory from "../components/BrowseByCategory";
import AvailableProducts from "../components/AvailableProducts";
import ImageWithText from "../components/ImageWithText";
import ExploreProducts from "../components/ExploreProducts";
import { Collections } from "../components/Collections";
import IconWithText from "../components/IconWithText";
import Footer from "../layouts/Footer";
import HeroSection from "../components/header/HeroSection";
const Home = () => {
  return (
    <div className="space-y-14">
      {/* <Header children={<HeroSection />} /> */}
      <FlashSale />
      <BrowseByCategory />
      <AvailableProducts />
      <ImageWithText />
      <ExploreProducts />
      <Collections />
      <IconWithText />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
