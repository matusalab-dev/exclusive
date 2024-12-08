import { Link } from "react-router";
import ButtonHoverOver, { PRIMARY_HOVEROVER_LINKS } from "../ButtonPopover";

const AnnouncementBar = () => {
  return (
    <div className="bg-colors-text-3 text-colors-primary-1 inverse full-bleed flex justify-end">
      <div className="w-full max-w-5xl text-center flex justify-between items-center  py-4">
        <div className="flex gap-3 mr-auto items-center">
          <p className="text-sm">
            Summer Sale For All Swim Suits And Free Express Delivery -{" "}
            <span className="uppercase">OFF 50%!</span>
          </p>
          <Link
            to="/"
            className="border-b border-b-colors-primary-1 font-semibold"
          >
            Shop Now
          </Link>
        </div>
        <ButtonHoverOver links={PRIMARY_HOVEROVER_LINKS} label="English" />
      </div>
    </div>
  );
};

export default AnnouncementBar;
