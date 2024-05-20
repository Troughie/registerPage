import React from "react";
import InputImg from "./inputImg";
import { addressSelectInter } from "../types/data_register";

interface props {
  labelImg?: string;
  data?: addressSelectInter[];
  register: any;
  errors: any;
}
const DivImg: React.FC<props> = ({ labelImg, data, register, errors }) => {
  return (
    <div className="p-10 shadow-lg rounded-lg border-[0.5px] border-emerald-200">
      <label className="gap-2 mb-2 text-lg font-medium text-gray-900 items-center flex">
        <span>{labelImg}</span>
      </label>
      {data?.map((el) => (
        <InputImg
          key={el.field}
          label={el.label}
          name={el.field}
          register={register}
          errors={errors}
          validator={el.validator}
        />
      ))}
    </div>
  );
};

export default DivImg;
