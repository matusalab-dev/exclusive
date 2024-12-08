const Input = ({ type = "text", id, placeholder }) => {
  return (
    <input
      type={type}
      name=""
      id={id}
      placeholder={placeholder}
      className="bg-colors-secondary-1 rounded-sm w-full focus:outline-colors-text-3 outline-none px-3 py-3 text-colors-text-3"
    />
  );
};

export default Input;
