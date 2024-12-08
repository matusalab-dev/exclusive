const FormGroup = ({ label, inputType, id }) => {
  return (
    <div className="flex flex-col gap-2 items-stretch w-full">
      <label htmlFor={id} className="capitalize text-xl">
        {label}
      </label>
      {inputType}
    </div>
  );
};

export default FormGroup;
