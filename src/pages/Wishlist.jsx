import { useProductQueries } from "../api/queries/product-queries";
import Button from "../components/Button";
import GridItem from "../components/GridItem";
import HeadingLabel from "../components/HeadingLabel";
import GridLayout from "../layouts/GridLayout";

const Wishlist = () => {
  const { data: products = [] } = useProductQueries();

  return (
    <section>
      <div className="flex items-center justify-between mt-20">
        <h3 className="text-xl">Wishlist(4)</h3>
        <Button
          size="lg"
          children="Move All To Bag"
          className="border border-colors-text-3"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 py-12">
        <p className="text-2xl font-medium text-center capitalize font-poppins justify-self-center text-colors-text-3">
          No products added to wishlist
        </p>
      </div>

      <div className="flex items-center justify-between mt-24">
        <HeadingLabel Children="Just For You" />{" "}
        <Button
          size="lg"
          children="See All"
          className="border border-colors-text-3"
        />
      </div>
      <GridLayout className="">
        {products?.map((product) => (
          <GridItem key={product.id} badge="" {...product} />
        ))}
      </GridLayout>
    </section>
  );
};

export default Wishlist;
