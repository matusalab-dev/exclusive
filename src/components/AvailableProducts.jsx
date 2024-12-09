import GridLayout from "../layouts/GridLayout";
import Button from "./Button";
import GridItem from "./GridItem";
import HeadingLabel from "./HeadingLabel";
import SectionHeader from "./SectionHeader";
import JoyStick from "../assets/joy-stick.png";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/api";
const AvailableProducts = () => {
  const { data: availableProducts = [] } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  console.log("available Products:", availableProducts);

  return (
    <section>
      <HeadingLabel
        Children="available"
        className="text-colors-green-1 border-l-colors-green-1"
      />
      <SectionHeader
        HeadingLabel="All products"
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

export default AvailableProducts;
