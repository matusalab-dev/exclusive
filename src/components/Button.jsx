import { Children } from "react";
import { cn } from "../utils/utils";

const sizes = {
  md: "px-4 py-2 rounded-b-sm text-base",
  lg: "px-7 py-3 text-lg rounded-md",
  xl: "px-7 py-3 text-lg rounded-b-md rounded-t-none",
};

const colors = {
  black: "bg-colors-text-3 text-colors-primary-1",
  red: "bg-colors-secondary-3 text-colors-primary-1",
  green: "bg-colors-green-1 text-colors-primary-1",
};

function Button({ color, size, children, className }) {
  let colorVariants = colors[color];
  let sizeVariants = sizes[size];
  console.log(colorVariants);

  return (
    <button
      type="button"
      className={`capitalize  ${colorVariants} ${sizeVariants} ${cn(
        "",
        className
      )} `}
    >
      {children}
    </button>
  );
}

export default Button;
