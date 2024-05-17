import React from "react";

interface props {
  field: string;
  label: string;
  validator: object;
  type?: string;
  register: any;
  errors: any;
}

const CustomInput: React.FC<props> = ({
  register,
  errors,
  type,
  label,
  field,
  validator,
}) => {
  return (
    <div className="mb-5">
      <label className="gap-2 mb-2 text-sm font-medium text-gray-900 items-center flex">
        <span
          className={`text-red-700 text-xl ${
            label === "address" ? "invisible" : "visible"
          }`}
        >
          *
        </span>
        <span>{label}</span>
      </label>
      {errors[field] && (
        <span className="text-red-500 text-sm">{errors[field].message}</span>
      )}
      <input
        type={type ?? "text"}
        id="base-input"
        {...register(`${field}`, validator)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        error={errors[field]}
      />
    </div>
  );
};

export default CustomInput;
