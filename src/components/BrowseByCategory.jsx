import HeadingLabel from "./HeadingLabel";
import SectionHeader from "./SectionHeader";
import GridLayout from "../layouts/GridLayout";
import ComputerIcon from "../assets/icons/computer-icon";
import SlideNavButton from "./SlideNavButton";

const BrowseByCategory = ({
  categories,
  setActiveCategory,
  activeCategory,
}) => {
  return (
    <section className="pb-12 border-b-2 border-b-colors-secondary-2">
      <HeadingLabel Children="categories" />
      <SectionHeader
        HeadingLabel="browse by category"
        buttons={<SlideNavButton />}
      />
      <GridLayout className="gap-3">
        {categories?.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex flex-col items-center justify-center w-56 px-6 py-8 border rounded-sm h-44 border-colors-text-3/30 ${
                isActive && "bg-colors-secondary-3 text-colors-primary-1"
              }`}
            >
              <ComputerIcon strokeColor={isActive ? "white" : "black"} />
              <p className="text-sm capitalize font-poppins">{category}</p>
            </button>
          );
        })}
      </GridLayout>
    </section>
  );
};

export default BrowseByCategory;
