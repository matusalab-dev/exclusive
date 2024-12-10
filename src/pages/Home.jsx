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
import {
  useAllProductCategories,
  useProductQueries,
} from "../api/queries/product-queries";
import AvailableProductSection from "../components/AvailableProducts";
import { useState } from "react";
const Home = () => {
  const { data: products = [] } = useProductQueries();
  const { data: categories = [] } = useAllProductCategories();

  const [activeCategory, setActiveCategory] = useState("all");
  const filteredProducts = products?.filter(
    (product) => product.category == activeCategory
  );
  console.log("available products", products);
  console.log("filterByCategory", filteredProducts);
  console.log("filteredprodcts length", filteredProducts.length);

  return (
    <div className="space-y-14">
      {/* <Header children={<HeroSection />} /> */}
      <FlashSale />
      <BrowseByCategory
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <AvailableProductSection
        availableProducts={
          filteredProducts.length === 0 ? products : filteredProducts
        }
        activeCategory={activeCategory}
      />
      <ImageWithText />
      <ExploreProducts availableProducts={products} />
      <Collections />
      <IconWithText />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
