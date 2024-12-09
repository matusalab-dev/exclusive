import HeadingLabel from "./HeadingLabel";
import CountDown from "./CountDown";
import GridLayout from "../layouts/GridLayout";
import GridItem from "../components/GridItem";
import JoyStick from "../assets/joy-stick.png";
import RGBKeyboard from "../assets/rgb-keyboard.png";
import Button from "../components/Button";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/api";

const FlashSale = () => {
  const { data: availableProducts = [] } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return (
    <section className="pb-12 border-b-2 mt-14 border-b-colors-secondary-2">
      <HeadingLabel Children="Today's" />
      <div className="flex flex-col">
        <CountDown className="justify-between" />
        <GridLayout>
          {availableProducts?.map((product) => (
            <GridItem key={product.id} badge="" {...product} />
          ))}
        </GridLayout>
        <Button
          size="lg"
          color="red"
          children="view all products"
          className="self-center mt-8 rounded-t-none"
        />
      </div>
    </section>
  );
};

export default FlashSale;
