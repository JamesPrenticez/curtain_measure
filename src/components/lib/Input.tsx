import React, { type ReactElement } from "react";

interface InputProps {
  id?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  value: string | number;
  onChange?: (e: any) => void;
  css?: {
    label: object;
    input: object;
  };
  cbcss?: {
    label: string;
    input: string;
  };
}

export const Input = ({
  id,
  name,
  label,
  placeholder,
  type,
  value,
  onChange,
  css,
  cbcss,
}: InputProps): ReactElement => {
  return (
    <label
      htmlFor={label}
      className={cbcss?.label ?? ""}
      style={{
        display: "flex",
        width: "full",
        fontWeight: 500,
        paddingBottom: "0.15rem",
        ...css?.input,
      }}
    >
      {label}
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        className={`bg-transparent ring-1 ring-theme-tertiary focus:ring-theme-quaternary outline-none px-[0.6rem] py-[0.4rem] rounded-sm grow w-full placeholder-gray1 ${
          cbcss?.input ?? ""
        }`}
        style={{
          ...css?.input,
        }}
        onChange={onChange}
      />
    </label>
  );
};
