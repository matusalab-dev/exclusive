import SlideArrowIcon from "../assets/icons/slide-arrow";

const SectionHeader = ({ HeadingLabel, buttons }) => {
  return (
    <header className="flex justify-between">
      <h3 className="font-inter text-3xl font-semibold capitalize mt-3">
        {HeadingLabel}
      </h3>
      {buttons}
    </header>
  );
};

export default SectionHeader;
