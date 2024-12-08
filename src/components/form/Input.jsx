import { cn } from "../../utils/utils";

const Input = ({ type = "text", id, placeholder, className }) => {
  return (
    <input
      type={type}
      name=""
      id={id}
      placeholder={placeholder}
      className={`${cn(
        "bg-colors-secondary-1 rounded-sm w-full focus:outline-colors-text-3 outline-none px-3 py-3 text-colors-text-3",
        className
      )}`}
    />
  );
};

export default Input;
