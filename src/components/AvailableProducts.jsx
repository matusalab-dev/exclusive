import GridLayout from "../layouts/GridLayout";
import Button from "./Button";
import GridItem from "./GridItem";
import HeadingLabel from "./HeadingLabel";
import SectionHeader from "./SectionHeader";

const AvailableProductSection = ({ availableProducts, activeCategory }) => {
  // const {
  //   data: availableProducts = [],
  //   isError,
  //   isLoading,
  // } = useProductQueries();
  // const { data: categories = [] } = useAllProductCategories();

  return (
    <section className="mt-16">
      <HeadingLabel
        Children="available"
        className="text-colors-green-1 border-l-colors-green-1"
      />
      <SectionHeader
        HeadingLabel={`${
          activeCategory === "all" ? "All Products" : activeCategory
        }`}
        buttons={<Button children="view all" color="red" size="lg" />}
      />
      <GridLayout>
        {availableProducts?.map((product) => (
          <GridItem key={product.id} badge="" {...product} />
        ))}
      </GridLayout>
    </section>
  );
};

export default AvailableProductSection;
