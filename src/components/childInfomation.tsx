import React, { useState } from "react";
import SelectAddress from "../commons/selectAddress";
import CustomInput from "../commons/input";
import { addressSelectInter, inputRegister } from "../types/data_register";
import DivImg from "../commons/divImg";
import SelectGroupOne from "./SelectGroupOne";

interface props {
  textHeader: string;
  textNoteHeader: string;
  textNoteBody: string;
  submitHandler: () => void;
  dataArrays: inputRegister[];
  register: any;
  errors: any;
  textAddress?: string;
  data?: addressSelectInter[];
  labelImg?: string;
  btnText?: string;
  showCheck?: boolean;
  typeAddress: string;
  setValue?: any;
}
const ChildInformation: React.FC<props> = ({
  textHeader,
  textNoteBody,
  submitHandler,
  textNoteHeader,
  dataArrays,
  data,
  labelImg,
  register,
  errors,
  textAddress,
  btnText,
  showCheck = true,
  setValue,
  typeAddress,
}) => {
  const [isCheck, setIsCheck] = useState(true);
  const handleCheck = () => {
    setIsCheck(!isCheck);
  };
  return (
    <div className="shadow-lg md:mx-[50px] pb-[50px]">
      <div className="text-blue-500 m-[50px]">
        <h2 className="font-bold text-4xl pb-4">{textHeader}</h2>
        <h4 className="font-bold text-xl">Note!</h4>
        <p className="line-clamp-2 leading-4 md:py-1 py-5 ">{textNoteHeader}</p>
        <span className="line-clamp-1">{textNoteBody}</span>
      </div>
      <form onSubmit={submitHandler} className=" mx-[50px] ">
        <div className="gap-x-5">
          {dataArrays.map((item) => (
            <CustomInput
              key={item.field}
              field={item.field}
              label={item.label}
              validator={item.validator}
              typeInput={item.type}
              register={register}
              errors={errors}
            />
          ))}
        </div>

        {showCheck ? <SelectGroupOne register={register} /> : null}

        <DivImg
          data={data}
          errors={errors}
          labelImg={labelImg}
          register={register}
        />

        {!showCheck ? (
          <div className="mt-5">
            <CustomInput
              field="isAddressSimilar"
              label="Địa chỉ thường trú giống trong căn cước công dân"
              typeInput="checkbox"
              isImportant="invisible"
              className=" flex-row-reverse justify-end items-center"
              register={register}
              handleOnchange={() => {
                handleCheck();
              }}
              errors={errors}
              checked={isCheck}
            />
          </div>
        ) : null}
        {!isCheck || showCheck ? (
          <div className="p-10 shadow-lg">
            <label className="gap-2  mb-2 text-lg font-medium text-gray-900 items-center flex">
              <span>{textAddress}</span>
            </label>
            <CustomInput
              field={`aDetail_${typeAddress}`}
              label="Address details"
              validator={{}}
              isImportant="invisible"
              register={register}
              errors={errors}
            />
            <SelectAddress
              typeAddress={typeAddress}
              register={register}
              setValue={setValue}
            />
          </div>
        ) : null}

        <p className="my-5">Kiểm tra kỹ thông tin trước khi {btnText}</p>
        <button className="flex w-full justify-center rounded-lg bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
          {btnText}
        </button>
      </form>
    </div>
  );
};

export default ChildInformation;
