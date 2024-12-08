import GridLayout from "../layouts/GridLayout";
import Button from "./Button";
import GridItem from "./GridItem";
import HeadingLabel from "./HeadingLabel";
import SectionHeader from "./SectionHeader";
import JoyStick from "../assets/joy-stick.png";
const AvailableProducts = () => {
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
        <GridItem badge="" imageUrl={JoyStick} />
        <GridItem badge="" imageUrl={JoyStick} />
        <GridItem badge="" imageUrl={JoyStick} />
        <GridItem badge="" imageUrl={JoyStick} />
        <GridItem badge="" imageUrl={JoyStick} />
        <GridItem badge="" imageUrl={JoyStick} />
      </GridLayout>
    </section>
  );
};

export default AvailableProducts;
