import { cn } from "../utils/utils";

const HeadingLabel = ({ Children, className }) => {
  return (
    <h2
      className={`${cn(
        "capitalize border-l-[12px] rounded-sm text-colors-secondary-3 border-l-colors-secondary-3 pl-4 text-base font-semibold",
        className
      )}`}
    >
      {Children}
    </h2>
  );
};

export default HeadingLabel;
