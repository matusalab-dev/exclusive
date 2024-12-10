import { cn } from "../utils/utils";

const GridLayout = ({ children, className }) => {
  return (
    <div
      className={`${cn(
        "flex overflow-x-scroll gap-10 rounded-sm mt-12 pb-6",
        className
      )}`}
    >
      {children}
    </div>
  );
};

export default GridLayout;
