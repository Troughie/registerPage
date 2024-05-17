import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { images } from "../assets";
import InputImg from "../commons/inputImg";
import InputCheckbox from "../commons/inputCheckbox";
import InformationLayout from "./layout/informationLayout";

const UploadInforStore = () => {
  const submitHandler = (data: any) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all", reValidateMode: "onChange" });
  return (
    <InformationLayout>
      <div className="shadow-lg  md:mx-[50px] pb-[50px]">
        <div className="text-blue-500 m-[50px]">
          <h2 className="font-bold text-4xl pb-4">Information store </h2>
        </div>
        <form onSubmit={handleSubmit(submitHandler)} className=" mx-[50px] ">
          <div className="block md:grid md:grid-cols-2 gap-x-5"></div>

          <div className="mb-5">
            <InputImg label="Anh dai dien" name="main" register={register} />
          </div>
          <div className="mb-5">
            <InputImg label="Anh nen" name="background" register={register} />
          </div>
          <p className="my-5">
            Please check the information carefully before submit
          </p>
          <button className="flex w-full justify-center rounded-lg bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
            Continue
          </button>
        </form>
      </div>
    </InformationLayout>
  );
};

export default UploadInforStore;
