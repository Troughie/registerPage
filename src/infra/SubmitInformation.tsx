import React, { useCallback, useEffect, useRef, useState } from "react";
import { DefaultLayout } from ".";
import { images } from "../assets";

import {
  addressSelect,
  inputDataRegister,
  inputModelRegisterStore,
} from "../model/input.model";
import SweetAlert2 from "react-sweetalert2";
import { useForm } from "react-hook-form";
import Loading from "../components/loading";
import { useNavigate } from "react-router-dom";
import pathRoutes from "../share/path";
import SelectAddress from "../commons/selectAddress";
import CustomInput from "../commons/input";
import ChildInformation from "../components/childInfomation";
import InformationLayout from "./layout/informationLayout";

const SubmitInformation = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [swalProps, setSwalProps] = useState({});
  const navigate = useNavigate();

  const textHeader: string =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat sed inventore fuga in, ";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all", reValidateMode: "onChange" });

  const submitHandler = (data: any) => {
    console.log(data);
    setIsLoading(true);
    localStorage.setItem("company", JSON.stringify(data));
    // navigate(pathRoutes.upload.path);
    setIsLoading(false);
  };

  return !isLoading ? (
    <InformationLayout>
      <ChildInformation
        dataArrays={inputDataRegister}
        submitHandler={handleSubmit(submitHandler)}
        textHeader="Information company"
        textNoteBody={textHeader}
        textNoteHeader={textHeader}
        textBtn="Continue"
        errors={errors}
        register={register}
      />
    </InformationLayout>
  ) : (
    <Loading />
  );
};

export default SubmitInformation;
