import SlideArrowIcon from "../assets/icons/slide-arrow";

const SlideNavButton = () => {
  return (
    <div className="flex gap-3">
      <button className="rounded-full bg-colors-secondary-1 size-10 flex items-center justify-center">
        <SlideArrowIcon className="-rotate-180 size-6 h-4 " />
      </button>
      <button className="rounded-full bg-colors-secondary-1 size-10 flex items-center justify-center">
        <SlideArrowIcon className="size-6 h-4 " />
      </button>
    </div>
  );
};

export default SlideNavButton;
