import HeadingLabel from "./HeadingLabel";
import CountDown from "./CountDown";
import GridLayout from "../layouts/GridLayout";
import GridItem from "../components/GridItem";
import JoyStick from "../assets/joy-stick.png";
import RGBKeyboard from "../assets/rgb-keyboard.png";
import Button from "../components/Button";

const FlashSale = () => {
  return (
    <section className="mt-14 border-b-colors-secondary-2 border-b-2 pb-12">
      <HeadingLabel Children="Today's" />
      <div className="flex flex-col">
        <CountDown className="justify-between" />
        <GridLayout>
          <GridItem imageUrl={JoyStick} />
          <GridItem imageUrl={RGBKeyboard} />
          <GridItem imageUrl={RGBKeyboard} />
          <GridItem imageUrl={JoyStick} />
          <GridItem imageUrl={JoyStick} />
          <GridItem imageUrl={JoyStick} />
        </GridLayout>
        <Button
          size="lg"
          color="red"
          children="view all products"
          className="self-center rounded-t-none mt-8"
        />
      </div>
    </section>
  );
};

export default FlashSale;
