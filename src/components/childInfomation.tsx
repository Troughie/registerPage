import React from "react";
import { useForm } from "react-hook-form";
import SelectAddress from "../commons/selectAddress";
import CustomInput from "../commons/input";
import { inputRegister } from "../types/data_register";

interface props {
  textHeader: string;
  textNoteHeader: string;
  textNoteBody: string;
  submitHandler: () => void;
  dataArrays: inputRegister[];
  textBtn?: string;
  register: any;
  errors: any;
}
const ChildInformation: React.FC<props> = ({
  textHeader,
  textNoteBody,
  submitHandler,
  textNoteHeader,
  dataArrays,
  textBtn,
  register,
  errors,
}) => {
  return (
    <div className="shadow-lg  md:mx-[50px] pb-[50px]">
      <div className="text-blue-500 m-[50px]">
        <h2 className="font-bold text-4xl pb-4">{textHeader}</h2>
        <h4 className="font-bold text-xl">Note!</h4>
        <p className="line-clamp-2 leading-4 md:py-1 py-5 ">{textNoteHeader}</p>
        <span className="line-clamp-1">{textNoteBody}</span>
      </div>
      <form onSubmit={submitHandler} className=" mx-[50px] ">
        <div className="block md:grid md:grid-cols-2 gap-x-5">
          {dataArrays.map((item) => (
            <CustomInput
              key={item.field}
              field={item.field}
              label={item.label}
              validator={item.validator}
              type={item.type}
              register={register}
              errors={errors}
            />
          ))}
        </div>
        <SelectAddress errors={errors} register={register} />
        <p className="my-5">
          Please check the information carefully before continuing
        </p>
        <button className="flex w-full justify-center rounded-lg bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
          {textBtn}
        </button>
      </form>
    </div>
  );
};

export default ChildInformation;
