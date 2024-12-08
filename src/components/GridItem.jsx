import EyeIcon from "../assets/icons/eye-icon";
import HeartIcon from "../assets/icons/heart-icon";
import StarIcon from "../assets/icons/StarIcon";
import { cn } from "../utils/utils";
import Button from "./Button";
const GridItem = ({
  badge = "-40%",
  imageUrl,
  className,
  styleButton,
  colorVariants,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center">
        <div
          className={`${cn(
            "flex bg-colors-secondary-1 py-4 px-4 w-80 h-64 justify-between items-center",
            className
          )}`}
        >
          <p
            className={`${
              badge
                ? "bg-colors-secondary-3 text-colors-primary-1 px-2 py-1 mb-auto rounded-sm"
                : ""
            }`}
          >
            {badge}
          </p>
          <img
            src={imageUrl}
            width="178px"
            height="150px"
            alt="joy stick"
            className="mx-auto"
          />
          <div className="flex flex-col gap-2 mb-auto">
            <button className="bg-colors-bg size-10 flex items-center justify-center rounded-full">
              {" "}
              <HeartIcon />
            </button>
            <button className="bg-colors-bg size-10 flex items-center justify-center rounded-full">
              {" "}
              <EyeIcon />
            </button>
          </div>
        </div>
        <Button
          color="black"
          size="xl"
          children="add to cart"
          className={`${cn(
            "capitalize rounded-b-sm w-full text-base font-medium",
            styleButton
          )}`}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="font-medium uppercase">HAVIT HV-G92 Gamepad</h4>
        <div className="font-poppins font-medium text-base flex gap-2">
          <p className="text-colors-secondary-3">$120</p>
          <p className=" line-through  text-colors-text-3">$160</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex gap-1 items-center">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <p className="font-semibold text-base">(88)</p>
        </div>
        {colorVariants && (
          <div className="flex gap-2 items-center">
            <button className="size-6 border-2 rounded-full border-colors-text-3 flex items-center justify-center">
              <span className="bg-colors-green-2 rounded-full size-4"></span>
            </button>
            <button className="size-6 border-2 rounded-full border-colors-text-3 flex items-center justify-center">
              <span className="bg-colors-secondary-3 rounded-full size-4 "></span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GridItem;
