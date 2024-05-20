import React from "react";
import { twMerge } from "tailwind-merge";

interface props {
  field: string;
  label: string;
  validator?: object;
  typeInput?: string;
  register: any;
  errors: any;
  isImportant?: string;
  className?: string;
  checked?: boolean;
  handleOnchange?: (e?: any) => void;
}

const CustomInput: React.FC<props> = ({
  register,
  errors,
  typeInput,
  label,
  field,
  validator,
  className,
  isImportant,
  handleOnchange,
  checked,
}) => {
  return (
    <div
      className={twMerge(
        "mb-5 flex flex-col item-center justify-between",
        className
      )}
    >
      <label
        className={twMerge(
          "gap-2 mb-2 text-md font-medium text-gray-900 items-center flex"
        )}
      >
        <span className={twMerge(`text-red-700 text-xl visible`, isImportant)}>
          *
        </span>
        <span>{label}</span>
      </label>
      {errors[field] && (
        <span className="text-red-500 text-sm">{errors[field].message}</span>
      )}
      <input
        type={typeInput ?? "text"}
        id="base-input"
        checked={checked}
        {...register(`${field}`, validator)}
        onChange={handleOnchange}
        className={twMerge(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        )}
        error={errors[field]}
      />
    </div>
  );
};

export default CustomInput;
