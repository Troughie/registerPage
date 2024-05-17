import React, { useState } from "react";
import SweetAlert2 from "react-sweetalert2";
import { images } from "../assets";
import { useForm } from "react-hook-form";
import { addressSelect, inputPersonRegister } from "../model/input.model";
import InputImg from "../commons/inputImg";
import Loading from "../components/loading";
import CustomInput from "../commons/input";
import SelectAddress from "../commons/selectAddress";
import ChildInformation from "../components/childInfomation";
import InformationLayout from "./layout/informationLayout";

const InforPerson = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const textHeader: string =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat sed inventore fuga in, ";

  const submitHandler = (data: any) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all", reValidateMode: "onChange" });
  return isLoading ? (
    <Loading />
  ) : (
    <InformationLayout>
      <ChildInformation
        dataArrays={inputPersonRegister}
        submitHandler={handleSubmit(submitHandler)}
        textHeader="Information Person"
        textNoteBody={textHeader}
        textNoteHeader={textHeader}
        textBtn="Continue"
        errors={errors}
        register={register}
      />
    </InformationLayout>
  );
};

export default InforPerson;
