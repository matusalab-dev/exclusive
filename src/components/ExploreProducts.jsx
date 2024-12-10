import GridLayout from "../layouts/GridLayout";
import HeadingLabel from "./HeadingLabel";
import SectionHeader from "./SectionHeader";
import SlideNavButton from "./SlideNavButton";
import JoyStick from "../assets/joy-stick.png";
import GridItem from "./GridItem";
import Button from "./Button";

const ExploreProducts = ({ availableProducts }) => {
  // const availableProducts = [
  //   {
  //     id: 1,
  //     image: JoyStick,
  //     name: "Havels",
  //     price: 120,
  //     colorVariants: ["yellowish", "green"],
  //   },
  //   {
  //     id: 2,
  //     image: JoyStick,
  //     name: "Havels",
  //     price: 120,
  //     colorVariants: ["yellowish", "green"],
  //   },
  //   {
  //     id: 3,
  //     image: JoyStick,
  //     name: "Havels",
  //     price: 120,
  //     colorVariants: ["yellowish", "green"],
  //   },
  //   {
  //     id: 4,
  //     image: JoyStick,
  //     name: "Havels",
  //     price: 120,
  //     colorVariants: ["yellowish", "green"],
  //   },
  //   {
  //     id: 5,
  //     image: JoyStick,
  //     name: "Havels",
  //     price: 120,
  //     colorVariants: ["yellowish", "green"],
  //   },
  //   {
  //     id: 6,
  //     image: JoyStick,
  //     name: "Havels",
  //     price: 120,
  //     colorVariants: ["yellowish", "green"],
  //   },
  //   {
  //     id: 7,
  //     image: JoyStick,
  //     name: "Havels",
  //     price: 120,
  //     colorVariants: ["yellowish", "green"],
  //   },
  //   {
  //     id: 8,
  //     image: JoyStick,
  //     name: "Havels",
  //     price: 120,
  //     colorVariants: ["yellowish", "green"],
  //   },
  // ];
  return (
    <section>
      <HeadingLabel Children="our products" />
      <SectionHeader
        HeadingLabel="explore our products"
        buttons={<SlideNavButton />}
      />
      <GridLayout className="grid grid-cols-4">
        {/* <GridItem styleButton="w-[109%]" badge="" image={JoyStick} /> */}

        {availableProducts?.map((product) => (
          <GridItem
            key={product.id}
            styleButton="w-[109%]"
            badge=""
            image={JoyStick}
            colorVariants={["yellowish", "green"]}
            {...product}
          />
        ))}
        {/* 
        <GridItem styleButton="w-[109%]" badge="" image={JoyStick} />
        <GridItem styleButton="w-[109%]" badge="" image={JoyStick} />
        <GridItem
          styleButton="w-[109%]"
          badge=""
          image={JoyStick}
          colorVariants={["yellowish", "green"]}
        />
        <GridItem styleButton="w-[109%]" badge="" image={JoyStick} />
        <GridItem styleButton="w-[109%]" badge="" image={JoyStick} />{" "}
        <GridItem
          styleButton="w-[109%]"
          badge=""
          image={JoyStick}
          colorVariants={["yellowish", "green"]}
        />
        <Button
          size="lg"
          color="red"
          children="view all products"
          className="self-center row-span-1 row-start-3 col-span-full justify-self-center"
        /> */}
      </GridLayout>
    </section>
  );
};

export default ExploreProducts;
