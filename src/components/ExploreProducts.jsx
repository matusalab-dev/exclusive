import GridLayout from "../layouts/GridLayout";
import HeadingLabel from "./HeadingLabel";
import SectionHeader from "./SectionHeader";
import SlideNavButton from "./SlideNavButton";
import JoyStick from "../assets/joy-stick.png";
import GridItem from "./GridItem";
import Button from "./Button";

const ExploreProducts = () => {
  return (
    <section>
      <HeadingLabel Children="our products" />
      <SectionHeader
        HeadingLabel="explore our products"
        buttons={<SlideNavButton />}
      />
      <GridLayout className="grid grid-cols-4">
        <GridItem styleButton="w-[109%]" badge="" imageUrl={JoyStick} />
        <GridItem
          styleButton="w-[109%]"
          badge=""
          imageUrl={JoyStick}
          colorVariants={["yellowish", "green"]}
        />
        <GridItem styleButton="w-[109%]" badge="" imageUrl={JoyStick} />
        <GridItem styleButton="w-[109%]" badge="" imageUrl={JoyStick} />
        <GridItem
          styleButton="w-[109%]"
          badge=""
          imageUrl={JoyStick}
          colorVariants={["yellowish", "green"]}
        />
        <GridItem styleButton="w-[109%]" badge="" imageUrl={JoyStick} />
        <GridItem styleButton="w-[109%]" badge="" imageUrl={JoyStick} />{" "}
        <GridItem
          styleButton="w-[109%]"
          badge=""
          imageUrl={JoyStick}
          colorVariants={["yellowish", "green"]}
        />
        <Button
          size="lg"
          color="red"
          children="view all products"
          className="row-start-3 row-span-1 col-span-full justify-self-center self-center"
        />
      </GridLayout>
    </section>
  );
};

export default ExploreProducts;
