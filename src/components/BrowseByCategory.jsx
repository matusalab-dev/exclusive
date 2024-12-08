import React from "react";
import HeadingLabel from "./HeadingLabel";
import SectionHeader from "./SectionHeader";
import GridLayout from "../layouts/GridLayout";
import ComputerIcon from "../assets/icons/computer-icon";
import SlideNavButton from "./SlideNavButton";
const BrowseByCategory = () => {
  return (
    <section className="border-b-colors-secondary-2 border-b-2 pb-12">
      <HeadingLabel Children="categories" />
      <SectionHeader
        HeadingLabel="browse by category"
        buttons={<SlideNavButton />}
      />
      <GridLayout className="gap-3">
        <button className=" rounded-sm flex flex-col items-center w-56 h-44 justify-center px-6 py-8 border-colors-text-3/30 border">
          <ComputerIcon />
          <p className="font-poppins text-sm capitalize ">phone</p>
        </button>
        <button className=" rounded-sm flex flex-col items-center w-56 h-44 justify-center px-6 py-8 border-colors-text-3/30 border">
          <ComputerIcon />
          <p className="font-poppins text-sm capitalize">Computers & Laptop</p>
        </button>
        <button className=" rounded-sm flex flex-col items-center w-56 h-44 justify-center px-6 py-8 border-colors-text-3/30 border">
          <ComputerIcon />
          <p className="font-poppins text-sm capitalize">Computers & Laptop</p>
        </button>
        <button className=" rounded-sm flex flex-col items-center w-56 h-44 justify-center px-6 py-8 border-colors-text-3/30 border">
          <ComputerIcon />
          <p className="font-poppins text-sm capitalize">Computers & Laptop</p>
        </button>
        <button className=" rounded-sm flex flex-col items-center w-56 h-44 justify-center px-6 py-8 border-colors-text-3/30 border">
          <ComputerIcon />
          <p className="font-poppins text-sm capitalize">Computers & Laptop</p>
        </button>
        <button className=" rounded-sm flex flex-col items-center w-56 h-44 justify-center px-6 py-8 border-colors-text-3/30 border">
          <ComputerIcon />
          <p className="font-poppins text-sm capitalize">Computers & Laptop</p>
        </button>
      </GridLayout>
    </section>
  );
};

export default BrowseByCategory;
