import { HTMLInputTypeAttribute } from "react";

type Props = {
  label: string;
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
export default function Input({
  label,
  name,
  type,
  onChange,
  placeholder,
}: Props) {
  return (
    <div className="mb-3 xl:w-96">
      <label className="form-label inline-block mb-2 text-gray-700">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
        id="exampleFormControlInput1"
        placeholder={placeholder}
        name={name}
        accept="image/*"
      />
    </div>
  );
}
